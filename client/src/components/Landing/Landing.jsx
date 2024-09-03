import React, {useState,useRef,useEffect, useCallback } from 'react';
import { Canvas,useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ClickableModel = ({ url, objectHandlers }) => {
  const { scene } = useGLTF(url,true);
  const { camera, gl } = useThree();
  const objectsRef = useRef([]);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const objects = [];
      ref.current.traverse((object) => {
          objects.push({
            name: object.name,
            position: object.position.clone(),
          });
      });
    }
  }, [scene]);

  useEffect(() => {
    objectsRef.current = objectHandlers.map(({ name }) => {
      const object = scene.getObjectByName(name);
      if (object) return object;
      else console.warn(`Object named "${name}" not found in the model.`);
      return null;
      
    }).filter(Boolean);

    scene.position.set(-10, -3, -5);
    scene.scale.set(2, 2, 2);
    
  }, [scene, objectHandlers]);
   
  const handleClick = useCallback((event, objectName) => {
    event.stopPropagation();
    const handler = objectHandlers.find(({ name }) => name === objectName)?.handler;
    if (handler) {
      handler();
    }
  }, [objectHandlers]);

  const onPointerMove = useCallback((event) => {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objectsRef.current);
    if (intersects.length > 0)document.body.style.cursor = 'pointer';
    else document.body.style.cursor = 'default';
    
  }, [camera]);

  const onPointerDown = useCallback((event) => {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(objectsRef.current);
    if (intersects.length > 0) {
      handleClick(event, intersects[0].object.name);
    }
  }, [camera, handleClick]);

  useEffect(() => {
    gl.domElement.addEventListener('pointermove', onPointerMove);
    gl.domElement.addEventListener('pointerdown', onPointerDown);

    return () => {
      gl.domElement.removeEventListener('pointermove', onPointerMove);
      gl.domElement.removeEventListener('pointerdown', onPointerDown);
    };
  }, [gl.domElement, onPointerMove, onPointerDown]);

  return <primitive object={scene} ref={ref}/>;
};


const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1}
        position={[5, 21, 5]}
        castShadow
      />
    </>
  );
};


export default function(){
  const objectHandlers = [
    { name: 'Resume', handler: () => alert('Object 1 clicked!') },
    { name: 'LearnMore', handler: () => location.pathname='/about' },
  ];
  const [fov,setFov]=useState(34);
  console.log(fov)
  return (
   <> 
    <Canvas
      style={{ position: 'absolute', zIndex: 0, height: '100vh', width: '100vw' }} // Ensures full viewport size
      camera={{ position: [20, 27, 8], fov:32 }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color('#e3eeff'); // Fullscreen background color
      }}
    >
      <Lights />
      <ClickableModel url="/untitled.glb" objectHandlers={objectHandlers} />
      <OrbitControls />
    </Canvas>
    </>
  );
};


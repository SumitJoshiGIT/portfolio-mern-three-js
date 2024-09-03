import React from 'react';
import Skill from './Work/Skills/Item';
import Achievements from './Work/Achievements/Item';
import Experience from './Work/Experience/Item';
import Projects from './Work/Projects/Item';
import { useState,useEffect } from 'react';
import Typing from './Effects/Typing';
import get from './get';

const itemMapping={
    1:[Skill,'Skills',get('Skills')],
    2:[Achievements,'Achievements',get('Achievements')],
    3:[Experience,'Experience',get('Experience')],
    0:[Projects,'Projects',get('Projects')],
}
export default function List(props){
 const [id,setId] =useState(0);
 const [data,setData]=useState({});
 
 useEffect(()=>{ 
    itemMapping[id][2].
     then((value)=>setData(value))
     .catch((err)=>console.error('Error:',err))

    },[id])

 function idBasedMapper([k,v],index){
    const Item=itemMapping[id][0];
    return <Item key={index}  heading={k} data={v}/>
  }
 
 return(
     <div className='flex-wrap border-box p-30'>
     <div className='flex flex-col p-3 align-left  text-wrap'>
     <h5 className=' font-semibold text-wrap text-5xl cxs:text-8xl cmd:text-9xl '>{itemMapping[id][1]}</h5>
     <div className='cxs:flex flex-wrap space-evenly'>
      { Object.entries(data).map(idBasedMapper)}
     </div> 
     
     </div>
     <div className='flex flex-row-reverse pb-4 pr-2  '>
     {[3,2,1,0].map((key)=>
     <button onClick={()=>{setData({});setId(key);}} key={key}  className={'h-1.5 pr-14 ml-1 mt-5 rounded-md  border-black border-2 '+((key==id)?'bg-black':'')}></button>)}
     </div>   
  </div>
    
 )
}
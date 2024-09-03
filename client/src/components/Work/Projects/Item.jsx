import React from 'react';
import {useState,useRef} from 'react';




export default function Project(props){
  
 const [id,setId]=useState(0);
 
 let data=props.data.entries[id];
  
  return (
     <div className='cxs:m-3 flex mt-10 w-3/7 max-w-xs'>
      <div className='p-3 align-left'>
        <h5 className='text-4xl mb-2 font-normal'>{props.data.language}</h5>    
        <div>
          <video controls className=' mb-2 border-2 border-black rounded-md' src={data.src} alt='No video found'></video>
        </div>
        <div className='flex flex-row-reverse'>
        
        <a href={data.link}>
          <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>  
        <a href={data.github}  className='mr-2'>
          <svg width="21px" height="21px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
        </a>
        <div className='w-full  flex flex-wrap'>
          {data.tags.map((k,i)=><span className=' m-1 w-fit flex justify-center align-middle p-1 rounded bg-green-300 mt-0  text-white text-xs ml-0' key={i}>{k}</span>)}
         </div>
        </div>
        <div>
          <h5 className='font-semibold'>Title:</h5><h4 className='text-xs'>{data.title}</h4>
        </div>        
        <div>
         <h4 className='font-semibold '>Details:</h4>

         <p className='text-xs'>{data.description}</p>
        </div>
        <div className='flex mt-2 flex-row-reverse'>
        <button onClick={()=>{(id<props.data.entries.length-1)?setId(id+1):null}}>

        <svg fill="#000000" width="27px" height="27px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M138.033 60.858c0-14.183 8.718-16.43 13.894-10.454 5.176 5.977 47.925 60.873 52.46 68.201 4.535 7.329 5.434 13.082.086 20.28-5.349 7.198-45.27 61.462-52.015 67.2-6.745 5.74-14.543 3.358-14.543-10.567 0-13.926.118-120.476.118-134.66zm51.265 71.792c1.34-1.758 1.357-4.612.03-6.388L156.4 82.205c-1.323-1.77-2.396-1.405-2.396.792L154 175.003c0 2.207 1.088 2.568 2.424.814l32.874-43.167zM47.033 60.858c0-14.183 8.718-16.43 13.894-10.454 5.176 5.977 47.925 60.873 52.46 68.201 4.535 7.329 5.434 13.082.086 20.28-5.349 7.198-45.27 61.462-52.015 67.2-6.745 5.74-14.543 3.358-14.543-10.567 0-13.926.118-120.476.118-134.66zm51.265 71.792c1.34-1.758 1.357-4.612.03-6.388L65.4 82.205c-1.323-1.77-2.396-1.405-2.396.792L63 175.003c0 2.207 1.088 2.568 2.424.814l32.874-43.167z" fill-rule="evenodd"></path> </g></svg></button>     
        
        <button onClick={()=>{(id>0)?setId(id-1):null}} className='mr-2'><svg fill="#000000" width="27px" height="27px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M138.033 60.858c0-14.183 8.718-16.43 13.894-10.454 5.176 5.977 47.925 60.873 52.46 68.201 4.535 7.329 5.434 13.082.086 20.28-5.349 7.198-45.27 61.462-52.015 67.2-6.745 5.74-14.543 3.358-14.543-10.567 0-13.926.118-120.476.118-134.66zm51.265 71.792c1.34-1.758 1.357-4.612.03-6.388L156.4 82.205c-1.323-1.77-2.396-1.405-2.396.792L154 175.003c0 2.207 1.088 2.568 2.424.814l32.874-43.167zM47.033 60.858c0-14.183 8.718-16.43 13.894-10.454 5.176 5.977 47.925 60.873 52.46 68.201 4.535 7.329 5.434 13.082.086 20.28-5.349 7.198-45.27 61.462-52.015 67.2-6.745 5.74-14.543 3.358-14.543-10.567 0-13.926.118-120.476.118-134.66zm51.265 71.792c1.34-1.758 1.357-4.612.03-6.388L65.4 82.205c-1.323-1.77-2.396-1.405-2.396.792L63 175.003c0 2.207 1.088 2.568 2.424.814l32.874-43.167z" fill-rule="evenodd"></path> </g></svg></button>  
         </div>
        </div>  
             
     </div>

  )

}
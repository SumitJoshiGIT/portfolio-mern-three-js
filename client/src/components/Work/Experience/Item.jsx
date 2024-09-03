import react from 'react';
import {useState} from 'react';




export default function Project(props){
  return (
     <div className='cxs:m-3 flex mt-10 w-3/7 max-w-xs'>
      <div className='p-3 align-left'>
        
      <div className='flex'>

        <h5 className='text-4xl mb-2 font-normal'>{props.data.org}</h5> 
        <a href={props.data.link}>
          <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>   
        </div>
        
        <div>
        <h5 className='font-semibold'>Post:</h5><p className='text-xs'>{props.data.role}</p>
        </div>        

        <div>
         <h5 className='font-semibold '>Duration:</h5>
         <p className='text-xs'>{props.data.duration}</p>
        </div>

        <div>
         <h5 className='font-semibold '>Details:</h5>
         <p className='text-xs'>{props.data.description}</p>
        </div>
        
        </div>  
             
     </div>

  )

}
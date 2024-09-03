import React from 'react';


export default function(props){
 console.log("reqq",props.data)
 return (
     <div className='p-3'>
      <h5 className='text-4xl mb-1 font-no antialiased'>{props.data.name}</h5>
      <ul>
       {props.data.sub.map((line,index)=><li className='text-xl pl-2  pt-1 tracking-wider' key={index}>{line}</li>)}  
      </ul> 
     </div>
 )
} 
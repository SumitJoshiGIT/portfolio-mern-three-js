import React,{useState,useEffect} from 'react';
import get from '../get'

const profile=get('profile')
export default function(){
const [data,setData]=useState({datapoints:[]})

useEffect(()=>{
   profile.then((dt)=>{
       setData(dt)
       
   })
},[data]);

return <div className='p-4'>
       <div className='flex flex-wrap w-screen m-10 ml-4'>
        <div className='overflow-hidden border-2 h-36 border-dashed w-36 rounded-full'>
         <img src={data.src}></img>
        </div>
        <ul className='m-5'>
         <li className='flex p-1 flex-wrap max-w-84'><h5 className='font-semibold text-lg '>Name:&nbsp; </h5><p className='text-lg'>{data.name}</p></li>
         <li className='flex p-1 flex-wrap max-w-84'><h5 className='font-semibold text-lg '>Profession:&nbsp; </h5><p className='text-lg'>{data.role}</p></li>
         <li className='flex p-1 flex-wrap max-w-84'><h5 className='font-semibold text-lg '>Born:&nbsp; </h5><p className='text-lg'>{data.born}</p></li>
         <li className='flex p-2 items-center  space-x-4 '>
          <a href={'mailto:'+data.email} className='text-xl font-medium hover:text-blue-500'>
           <svg className='h-5 w-5'  viewBox="0 -3.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled"  transform="translate(-414.000000, -261.000000)" fill="#000000"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" > </path> </g> </g> </g></svg>
          </a>
          <a href={data.github} className='text-xl font-medium hover:text-blue-500'>
           <svg  className='h-5 w-5' viewBox="0 0 20 20"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg></a>
          <a href={data.linkedin} className='text-xl font-medium hover:text-blue-500'>
           <svg fill="#000000" className='h-5 w-5' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="-143 145 512 512" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> </g></svg>
          </a>
        </li> 
        </ul>
      
       </div>
   
       <hr></hr>
       <div>
        <ul className='m-5'>
         {Object.entries(data.datapoints).map(([k,v],i)=><li className='flex p-1 flex-wrap max-w-84' key={i}><h5 className='font-semibold text-lg '>{k}:&nbsp;</h5><p className='text-lg w-max-4/5 '>{v}</p></li>)}        
        </ul>
       </div>





</div>

}
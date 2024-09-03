import react from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props){

     return <div className='bg-transparent w-screen  flex  justify-between border-box align-middle  z-10 p-4 '>
       <Link to={''} className='text-xs align-baseline '>
        <img src='logo.png' className=' h-8 w-8'></img>
       </Link>
           
       <div className='h-8 flex font-semibold align-baseline '>
           <Link to={'about'} className='text-xs mr-2 h-fit p-2'>About</Link>
           <Link to={'work'} className='text-xs mr-2 h-fit p-2'>Work</Link> 
           <Link to={'contact'} className='text-xs mr-2 p-2 h-fit'>Contact</Link> 
       </div>

     </div>










}
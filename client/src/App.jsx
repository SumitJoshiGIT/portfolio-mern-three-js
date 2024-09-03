import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import './App.css'
import { useLocation,Link} from 'react-router-dom';
const map={
   '/':'about',
   '/about':'work',
   '/work':'contact'
}
function App() {
  const location=useLocation();
  return (
    <div className='min-w-screen min-h-screen'>
     <Navbar/>
     <Outlet/>
   
     <div className=' p-4 flex flex-row-reverse'>
        <Link to={map[location.pathname]}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </Link>
       </div>
    </div>
  )
}

export default App

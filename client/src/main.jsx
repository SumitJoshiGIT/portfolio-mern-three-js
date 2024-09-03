import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Contact from './components/Contact/Contact'
import  Work from './components/Work.jsx'
import About from './components/About/About'
import Landing from './components/Landing/Landing.jsx'
import Loading from './components/Loading.jsx'
const router=createBrowserRouter([
    
  {path:'/',element:<App/>,
    children:[
    {path:'', element:<Landing/>},
    {path:'about', element:<About/>},
    {path:'work', element:<Work/>},
    {path:'contact', element:<Contact/>},
    ]
  },
  {path:'/',element:<Landing/>}
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Suspense fallback={<Loading/>}>   
    <RouterProvider router={router}/>
  </Suspense>  
  </React.StrictMode>,
)

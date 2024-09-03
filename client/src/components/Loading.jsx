
import Typing from "./Effects/Typing.jsx"
const quotes=[
    "Good things take time.",
    "Patience is a virtue.",
    "Almost there...",
    "Hold tight, magic is happening.",
    "Great things are worth the wait."
]
export default function (){
    
    return  <div className='p-20  absolute h-screen w-screen justify-center items-center flex '>
    <div className='justify-center '>  
      <div className="italic text-4xl text-center"><Typing text={'Loading...'}/></div>
      <hr className=''/>
      <p className='w-64 text-center italic'>"{quotes[Math.floor(Math.random()*quotes.length)]}"</p>
    </div>
  </div>
}
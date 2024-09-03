import React,{useState,useRef,useEffect} from "react"
export default function (props){

    const [text,setText]=useState(props.text[0])
    const t=useRef(props.text)

    const ref=useRef(0)
    useEffect(() =>{
      setTimeout(()=>{
        if(ref.current<t.current.length){
          setText(text+t.current[ref.current])
          ref.current++;
        }
      },300)
    },[text])
    
    return  (<p className=''>{text}</p>)  
}
import React,{useState} from 'react'
import "./Alert.css"
import { RiCloseFill } from "react-icons/ri";

function Alert() {
    const [alert,setAlert] = useState(true);
  return (
    <div>
        <button className='click-me-btn' onClick={()=>setAlert(!alert)}>Click Me</button>
        {alert && 
        (<div className='alert-box'>
            <RiCloseFill icon="close" size={27}  className='float-end' onClick={()=>setAlert(!Alert)}/>
            <h1>hiii</h1>
        </div>)}
    </div>
  )
}

export default Alert

import React,{useState} from 'react'
import "./Alert.css"
import { RiCloseFill } from "react-icons/ri";

function Alert() {
    const [alert,setAlert] = useState(false);
  return (
    <div>
        <button className='click-me-btn' onClick={()=>setAlert(!alert)}>Click Me</button>
        {alert && 
        (<div className='alert-box'>
            <RiCloseFill icon="close" size={27}  className='float-end' onClick={()=>setAlert(!Alert)}/>
            <h1>Modal Title</h1>
            <div class="modal-content">
              <p>Some text in the Modal..</p>
            </div>
            <button className='close-btn' onClick={()=>setAlert(!alert)}>Close</button>
            <button className='save-btn'>Save changes</button>
        </div>)}
    </div>
  )
}

export default Alert

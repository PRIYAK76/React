import React,{useState} from 'react'
import "./Collapse.css"

function Collapse() {
    const [alert,setAlert] = useState(false);
  return (
    <div>
        <button className='click-me-btn' onClick={()=>setAlert(!alert)}>Open</button>
        {alert && 
        (<div className='anime'>   
              <p>Some text in the Collapse..</p>
        </div>)}
    </div>
  )
}

export default Collapse

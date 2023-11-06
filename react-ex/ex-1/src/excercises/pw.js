import { useState } from "react";
import React from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const Pw = () => {
    const [isRevealPwd,setIsRevealPwd]=useState("");
  return (
    <div>
      <div className="pwd-container d-flex">
      <input type={isRevealPwd ? "password" : "text"} placeholder="Type Password"></input>
    <button onClick={() => setIsRevealPwd(!isRevealPwd)}>{isRevealPwd ? <AiOutlineEye icon="close" size={27} /> : <AiOutlineEyeInvisible icon="close" size={27} />}
            </button>
                        
        </div>
    </div>
  )
}

export default Pw

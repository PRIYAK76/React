import { useState } from "react";

export const Fourth =()=>{
    const [pass,setPass]=useState("");
    const [repass,setRePass]=useState("");

    const password=(e)=>{
        setPass(e.target.value);
    }
    const repassword=(e1)=>{
        setRePass(e1.target.value);
    }
    const displayMethod=()=>{
        if (pass !== "" && repass !== "" && pass === repass) 
            return false;
        else
            return true;
    }
    return (
        <div >
            <h1>Excercise 4:</h1>
            <h1>Disable Submit Problem</h1>
            <input type="text" placeholder="Type Password" onChange={password} value={pass}></input>
            <input type="text" placeholder="Re-type Password" onChange={repassword} value={repass}></input>
            <div>
            {displayMethod()}
            <button disabled={displayMethod()} onClick={()=>alert("Password Successfully reseted!!!")}>Submit</button>
            </div>
        </div>
      );
}
import { useState } from "react";

export const Second =()=>{

    const [pass,setPass]=useState("");
    const [repass,setRePass]=useState("");

    const password=(e)=>{
        setPass(e.target.value);
    }
    const repassword=(e1)=>{
        setRePass(e1.target.value);
    }
    const displayMethod=()=>{
        if (pass !== "" && repass !== "") {
            if (pass !== repass) {
              return "Password doesn't match";
            }
          }
    }
    return (
        <div >
            <h1>Excercise 2:</h1>
            <h1>Reset Password Form</h1>
            <input type="text" placeholder="Type Password" onChange={password} value={pass}></input>
            <input type="text" placeholder="Re-type Password" onChange={repassword} value={repass}></input>
            <h1 style={{color:"red"}}>{displayMethod()}</h1>
        </div>
      );
}
import { useState } from "react";

export const Third =()=>{
    const [pass,setPass]=useState("");
    const resetMethod=(e)=>{
        setPass(e.target.value);
    }
    const display=()=>{
        if(pass!==""){
            if( /^[a-zA-Z0-9]+$/.test(pass) && /[0-9]+/.test(pass) && /[a-zA-Z]+/.test(pass))
                return (<p>strong Password</p>);
            return (<p>please include at least one number and alphabets</p>);
        }
    }
    return (
        <div >
            <h1>Excercise 3:</h1>
            <h1>Reset Password </h1>
            <input type="text" placeholder="Type Password" onChange={resetMethod} value={pass}></input>
            <p>{display()}</p>
        </div>
      );
}
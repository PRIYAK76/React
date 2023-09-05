import { useState } from "react";

export const Fifth =()=>{
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
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div >
            <h1>Excercise 5:</h1>
            <h1>Disable Submit - Show/Hide</h1>
            <input type={isHidden ? "password" : "text"} placeholder="Type Password" onChange={password} value={pass}></input>
            <span onClick={(e)=>{
                if(isHidden) {
                    e.target.innerText = "hide";
                } else {
                    e.target.innerText = "show";
                    }
                    setIsHidden((isHidden)=>!isHidden)}
                } 
                style={{ cursor: "pointer" }}>Show</span>
            <input type={isHidden ? "password" : "text"} placeholder="Re-type Password" onChange={repassword} value={repass}></input>
            <span onClick={(e)=>{
                if(isHidden) {
                    e.target.innerText = "hide";
                } else {
                    e.target.innerText = "show";
                    }
                    setIsHidden((isHidden)=>!isHidden)}
                } 
                style={{ cursor: "pointer" }}>Show</span>
            <div>
            {displayMethod()}
            <button disabled={displayMethod()} onClick={()=>alert("Password Successfully reseted!!!")}>Submit</button>
            </div>
        </div>
      );
}
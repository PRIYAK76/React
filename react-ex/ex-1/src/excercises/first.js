import { useState } from "react";

export const First1 =()=>{
    const [count,setCount]=useState("");
    const charCounter=()=>{
    let countcolor = "black";
    let diff=50-count.length;
    if(diff<21 && diff>-1){
     countcolor="orange";
    } else if(diff<0){
      countcolor="red";
    }
    return(
      <div>
         <span style={{color: countcolor}}>{diff}</span>/50
      </div>
    );
    }
    const updateCounter=(e)=>{
        setCount(e.target.value);
    }

    return (
        <div >
         <h1>Excercise 1:</h1>
         <h1>Twitter - Character Counter</h1>
         <textarea type="text" value={count} onChange={updateCounter}></textarea>
         <h1>{charCounter()}</h1>
        </div>
      );
}
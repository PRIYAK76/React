import './App.css';
import Axios from "axios";
import {useState,useEffect} from "react";
function App() {

    // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data)=>{
    // console.log(data);
    // });

    const [catFact,setCatFact]=useState("");
    useEffect(()=>{
       Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    })
    },[]);
   
  return (
    <div className="App">
      <button>Generate cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;

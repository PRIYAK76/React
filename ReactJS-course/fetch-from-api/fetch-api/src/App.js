import './App.css';
import Axios from "axios";
import {useState,useEffect} from "react";
function App() {

    // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data)=>{
    // console.log(data);
    // });

    const [catFact,setCatFact]=useState("");

    const fetching=()=>{
      Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    });
    }
    useEffect(()=>{
      fetching();
    },[]);
   
  return (
    <div className="App">
      <button onClick={fetching}>Generate cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;

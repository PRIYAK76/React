import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {
  const [generatedExcuse,setGeneratedExcuse]=useState("");

  const fetchExcuse=(excuse)=>{
    Axios.get( `https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
      setGeneratedExcuse(res.data[0].excuse);
      console.log("fetching data");
    });
  //   Axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
  //       setGeneratedExcuse(res.data[0].email);
  // });
  };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={()=>fetchExcuse("party")}>Party</button>
      <button onClick={()=>fetchExcuse("family")}>Family</button>
      <button onClick={()=>fetchExcuse("office")}>office</button>
      <p>{generatedExcuse}</p>
    </div>
  );
}

export default App;

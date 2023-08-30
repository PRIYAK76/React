import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [show,setShow]=useState(true);
  const [text,setText]=useState("None")
  useEffect(()=>{
    console.log("component mounted");
  },[]);

  return (
    <div className="App">
      <button onClick={()=>{setShow(!show);}}>Show/hide</button>
      {show && <h1>HII IM PRIYADHARSHINI</h1> }
      <input onChange={(event)=>{setText(event.target.value);}}/>
      <h1>{text}</h1>
    </div>
  );
}

export default App;

import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("");
  const [output,setOutput]=useState("");

  const fetchLocation=()=>{
    Axios.get(`https://api.agify.io/?name=${name}&country_id=US`).then(
      (res)=> {setOutput(res.data)
  })
  };


  return (
    <div className="App">
      <input type="text" placeholder="Name" onChange={(event)=>{
        setName(event.target.value);
      }} />
      <button onClick={fetchLocation} >Location</button>
      <h1>{output.count}</h1>
    </div>
  );
}

export default App;

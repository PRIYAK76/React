import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
  const [name,setName]=useState("");
  const [predictedAge,setPredictedAge]=useState("");

  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data);
    })
  }
  return (
    <div className="App">
      <input type="text" placeholder="Ex....Priya" 
        onChange={(event)=>{
        setName(event.target.value);}
        } />
      <button onClick={fetchData}>Predict age</button>
      <h1>Name: {predictedAge.name}</h1>
      <h1>Predicted Age: {predictedAge.age}</h1>
      <h1>Count: {predictedAge.count}</h1>
    </div>
  );
}

export default App;

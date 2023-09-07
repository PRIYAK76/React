import './App.css';
import { useState,useRef } from 'react';

function App() {

  const [name,setName]=useState('');
  const myRef=useRef();

  function focus(){
    myRef.current.focus();
  }
  return (
    <div className="App">
      <input  ref={myRef}value={name} onChange={(e)=>setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  
  const [count,setCount]=useState(50);
  let diff=50-count.length;
  if(diff<21){
    style={color:"red"}
  }
  const updateCounter=(e)=>{
    setCount(e.target.value);
  }
  return (
    <div className="App">
     <h1>Excercise 1:</h1>
     <h1>Twitter - Character Counter</h1>
     <textarea type="text" value={count} onChange={updateCounter}></textarea>
     <h1>{diff}/50</h1>
    </div>
  );
}

export default App;

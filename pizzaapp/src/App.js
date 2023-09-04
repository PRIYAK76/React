import { useState } from "react";
import "./App.css";

function App() {
  const [disp,setDisp]=useState(true);
  const [num,setNum]=useState([]);
  const [newNum,setNewnum]=useState();
  const addNumber=(e)=>{
    setNewnum(e.target.value);
  }
  const displaynumbers=()=>{
    setNum([...num,newNum]);
  }
  return (
    <div className="App">
      <button onClick={()=>setDisp(!disp)}>Click me</button>
      {disp && <h1>Hello Welcome</h1>}
      <input type="text" placeholder="Enter numbers" onChange={addNumber}></input>
      <button onClick={displaynumbers}>Add</button>
      {num.map((i)=>{
          return( <h1>{i}</h1>)
        })
      }
    </div>
  );
}

export default App;
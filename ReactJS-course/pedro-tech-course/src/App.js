import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount]=useState(0);

  const inc=(()=>{
    setCount(count+1);
  });
  const dec=(()=>{
    setCount(count-1);
  });
  const setzero=(()=>{
    setCount(0);
  });

  return (
    <div className="App">
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={setzero}>Set to zero</button>

      {count}
    </div>
  );
}

export default App;

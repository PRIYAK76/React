import './App.css';
import { useState } from 'react';

function App() {

  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");
  const addToList=()=>{
    setTodoList([...todoList,newTask]);
  }
  const deleteTask=(taskNa)=>{
    setTodoList(todoList.filter((task1)=>task1!==taskNa));
  }
  return (
    <div className="App">
      <input type="text" placeholder="Todos" onChange={(event)=>{setNewTask(event.target.value)}}/>
      <button onClick={addToList}>ADD</button>
      {todoList.map((task)=>{
        return(
          <div>
            <h1>{task}</h1>
            <button onClick={()=>deleteTask(task)}>
              Delete
            </button>
          </div>
        );
      })}
      
    </div>
  );
}

export default App;


import { useState } from "react";
import "./styles.css"

function App(){
  const [newItem,setNewItem]= useState("")
  return( 
  <>
      <form className="new-item-form">
        <div className="form-row p-3 ">
        <div className=" d-grid ">
          <label htmlFor="item">New Item</label>
          <input  value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
          </div>
        </div>
        <div className=" d-grid p-3 ">
        <button className="btn btn-outline-primary btn-block">Add</button></div>
      </form>
      <h1 className="header">Todo list</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-outline-danger">Delete</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-outline-danger">Delete</button>
        </li>
      </ul>
  </>
  )
}
export default App;
import { useState } from "react"

export function NewTodoForm({onSubmit}){
   
    const [newItem,setNewItem]= useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)
        
        setNewItem("")
      }



    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row p-3 ">
        <div className=" d-grid ">
          <label htmlFor="item">New Item</label>
          <input  value={newItem} 
          onChange={e=> 
          setNewItem(e.target.value)} 
          type="text" id="item" />
          </div>
        </div>
        <div className=" d-grid p-3 ">
        <button className="btn btn-outline-primary btn-block">Add</button></div>
      </form>
    )
}
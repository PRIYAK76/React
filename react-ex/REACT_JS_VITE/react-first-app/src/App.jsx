import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function Appli() {
  const [todos, setTodos] = useState([ { id: crypto.randomUUID(), title : "default todo", completed: false },])  //let todos=[]

  // setTodos(() => {

    // const localValue = localStorage.getItem("ITEMS")
    // if (localValue == null) return []
    // else
    //   setTodos(JSON.parse(localValue))
  // })

  useEffect(() => {
    console.log("useEffect with []")
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) {
      return []
    } else {
      setTodos(JSON.parse(localValue))
    }
  }, [])

  useEffect(() => {
    console.log("useEffect with [todos]")
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    console.log("adding todo" + title)
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <h2>hiiii</h2>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List1</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
import React, {useState, useRef, useEffect} from 'react';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
//Following the guidance of WebDevSimplified

function App() {  

  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'todoApp.todos'

// Persist
useEffect(() =>{
  const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodo) setTodos(storedTodo)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

  function toggleTodo(id){
    const newTodos = [...todos] //When change state, don't do it directly, make copy then change
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)

  } //Persist end


  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    }) 
    todoNameRef.current.value = null;
  }

    function handleClearComplete() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

  return (
    <>
      
      <input type="text" ref={todoNameRef}  placeholder="Type here..."/>
      <button onClick={handleAddTodo}>Submit</button> 
      <button onClick={handleClearComplete}>Clear Complete</button> 
      <div>{todos.filter(todo => !todo.complete).length} item left</div>

      <TodoList todoList={todos} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App;

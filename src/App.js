import React, {useState, useRef} from 'react';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {  
  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    }) 
    todoNameRef.current.value = null;
  }

  return (
    <>
      
      <input type="text" ref={todoNameRef}  placeholder="Type here..."/>
      <button onClick={handleAddTodo}>Submit</button> 
      <button>Clear Complete</button> 
      <div>0 item left</div>

      <TodoList todoList={todos}/>
    </>
  )
}

export default App;

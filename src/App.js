import React, {useState} from 'react';
import TodoList from "./TodoList";

function App() {  
  const [todos,setTodos] = useState(["todo 1","todo 2","t"]);
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text" placeholder="Type here..."/>
    <button>Submit</button> 
    <button>Clear Complete</button> 
    <div>0 item left</div>
    </>
  )
}

export default App;

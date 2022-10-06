
import React, { useState, useRef } from 'react';
import './App.css'

function App() {

  const [inputs, setIputs] =useState({
    content:''
  })
  const {content} =inputs

  const onChange =e=> {
    const {name, value} =e.target
    setIputs({
      ...inputs,
      [name]:value
    })
  }
  const [todos, setTodos] = useState([
    {
      id:1,
      content : 'react를 배워봅시다!'
    }
  ])
  const nextId = useRef(2);

  const onCreate = (e) => {
    e.preventDefault();
    const todo ={
      id : nextId.current,
      content
    }
    setTodos(todos.concat(todo))
      setIputs({
        content:''
      })
      nextId.current += 1;
  }
  return (
    <div className='form'>
     <input type="text" name="content" value={content} onChange={onChange}></input>
     <button onClick={onCreate}>추가하기</button>
     <h1>Todo List</h1>
      <div>{todos.map(todo =>(
        <div className="todo-container" todo={todo} key={todo.id}>
          <b className='text1'>{todo.content}</b>
        </div>
      ))}</div>
    </div>
  );
}

export default App;

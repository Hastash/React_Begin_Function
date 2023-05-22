import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';

function App() {  

  let [name, setName]= useState('Nathan');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    {id:'todo1', title: 'Watching Nathan Channel!'},
    {id:'todo2', title: 'Doing Homework'},
    {id:'todo3', title: 'Playing Game'}

  ]);
  const handleEventClick=(e)=>{
    if(!address){
      alert('empty input');
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = {id: 'asd', title: address}
    setTodos([...todos, newTodo]); // asyn
    setAddress('');
  }
  const handleOnchangeInput=(e)=>{
    setAddress(e.target.value);
    // console.log(e.target.value); // Issue
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <div className='todo-container'>
          {todos.map(todo=>{
            return(
              <li className='todo-child' key={todo.id}>{todo.title}</li>
            );
          })}

        </div>
        <input type="text" value={address} onChange={(e)=>{handleOnchangeInput(e)}}></input>
        <button type="button" onClick={(e) => handleEventClick(e)}>Click me</button>
      </header>
    </div>
  );
}

export default App;

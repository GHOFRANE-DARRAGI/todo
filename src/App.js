import React from 'react';
import Addtodo from "./components/addtodo"
import './App.css';
import TodoItems from './components/todoItems';

function App() {
  return (
    <div className="App">
       <Addtodo />
       <TodoItems />
    </div>
  );
}


export default App;

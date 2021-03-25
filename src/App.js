import './App.css';
import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Form />
      <TodoList/>
    </div>
  );
}

export default App;

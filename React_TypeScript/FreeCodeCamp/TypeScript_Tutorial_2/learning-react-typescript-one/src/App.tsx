import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './Model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) 
    {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  //console.log(todos);


  // check apakah inputan dari form berfungsi, liat di inspect -> console
  //console.log(todo);

  return (
    <div className='App'>
      <span className='Heading'>To Do List with React</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;

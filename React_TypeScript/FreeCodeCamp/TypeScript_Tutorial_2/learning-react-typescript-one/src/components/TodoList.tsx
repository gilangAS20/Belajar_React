import React from 'react'
import './Styles.css'
import { Todo } from '../Model';
import SingleTodo from './SingleToDo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='AllOfTodoList'>
        {
            todos.map((todo) => (
                <SingleTodo 
                    todo={todo} 
                    key={todo.id}
                    todos = {todos}
                    setTodos={setTodos}/>
            ))
        }
    </div>
  )
}

export default TodoList;
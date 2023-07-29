import React from 'react';
import { Todo } from '../Model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './Styles.css'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='TodoForm'>
        <span className='TodoFormText'>
            {todo.todo}
        </span>

        <div>
            <span className='TodoFormButton'>
                <AiFillEdit/>
            </span>
            <span className='TodoFormButton'>
                <AiFillDelete/>
            </span>
            <span className='TodoFormButton'>
                <MdDone/>
            </span>
        </div>
    </form>
  )
};

export default SingleTodo
import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../Model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './Styles.css'
import TodoList from './TodoList';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDoneToDo = (id: number) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id? {...todo, isDone:!todo.isDone} : todo
                )
        )
    };

    const handleDeleteToDo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEditToDo = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => (todo.id === id? {...todo, todo: editTodo} : todo))
        );

        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
    inputRef.current?.focus();
    }, [edit])
    

    return (
        <form className='TodoForm' onSubmit={(e) => handleEditToDo(e, todo.id)}>
            {
                edit ? (
                    <input 
                        className='TodoFormText'
                        ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}/>
                ): (
                    
                        todo.isDone ? (
                            <s className='TodoFormText'>
                                {todo.todo}
                            </s>
                        ):(
                            <span className='TodoFormText'>
                                {todo.todo}
                            </span>
                        )
                    
                )
            }
            


            <div>
                <span 
                    className='TodoFormButton' 
                    onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }}
                    }
                >
                    <AiFillEdit/>
                </span>
                <span className='TodoFormButton' onClick={() => handleDeleteToDo(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className='TodoFormButton' onClick={() => handleDoneToDo(todo.id)}>
                    <MdDone/>
                </span>
            </div>
        </form>
    )
};

export default SingleTodo
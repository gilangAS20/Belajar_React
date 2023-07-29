import React, {useRef} from 'react'
import './Styles.css'

interface Props {
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
    <form 
        className='InputForm' 
        onSubmit={(e) => {
            handleSubmit(e)
            inputRef.current?.blur();
        }}
    >
            <input 
                ref={inputRef}
                type='text'
                value={todo} 
                onChange={(e) => setTodo (e.target.value)}
                className='InputBox' 
                placeholder='type your to do list here' />
            <button className='InputButton' type='submit'>
                Enter
            </button>
    </form>
    )
}

export default InputField

import React, {useState}from 'react'
import { useTodo } from '../context';
function TodoForm() {

    const [todo,setTodo] =useState('')

    const {addTodo} = useTodo()

    const add = (e)=>{

        e.preventDefault();

        if(!todo) return

        // addTodo({id:Date.now() ,todo:todo ,completed:false})
        //Here an check if the todo is empty then return else 
        //add todo with id ,todo msg and complete or not
        //I can write it like this as I have already define id in main.jsx defination so
        addTodo({todo,completed:false})
        //if the field name and value name are same then we can write only one name like todo:todo to todo
        setTodo('')
    }

    

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //we are wiring input  with the todo means setting todo value
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


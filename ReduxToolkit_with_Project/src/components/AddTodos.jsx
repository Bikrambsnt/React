//in this we will use Dispatcher......


import React from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "../app/feature/todo/todoSlicer";
function AddTodos () {
    const [input , setInput] = React.useState('');
    //now we will use dispatch to dispatch the data or send the data
    //disptach will use reducer to add value to the store

    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        //input means the addTodo methods value like id , text , instead of writing all  we can use input directly
        setInput('') //cleaning the input ..
    }



    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange= {(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    )


}
export default AddTodos
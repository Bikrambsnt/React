import { useState,useEffect } from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'


function App() {

  const [todos ,  setTodos] = useState([])

  //todos or addTodo

  const addTodo = (todo)=>{
  //this todo has not came from  any properties we are just defining it its a array with a lots of value...
    //setTodos(todo) I cannot do like this directly because it will delete all the previous value and only keep the present value so to avoid  that we need to aceess the previos value
    //setTodos((prev)=> [todo ,...prev ]) here I have add a new value and destructure the previous value  too but I cannot use todo directly because it has id also so I ave to take id too so better i can do
    setTodos((prev)=> [{id:Date.now(),...todo}, ...prev]) //take date as a id because it will genrate unique number


  }

  //update todo

  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo )))
    //here PrevTodo is each singe todo and if its matches it with the update todo then add that todo or keep the previous Todo as it is

  } 

  //deleteTodo

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id ))
    //here am saying that create a new array and inside that put the value whose id will not match with the id
  }



  //toogle 
const toggleComplete = (id) =>{

  setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id ===id ? {...prevTodo   ,completed :!prevTodo.completed}: prevTodo ))
  //Here I am taking the previous from that and taking the prevTodo {here previous todo means id,todomesages and completed} so in that am just reversing if its true than false and fale to true
}



//From here Local storage concept is start
//In local storage which is provided by the browser we can store our todos list in that so we will not loose it
//it has basically two step  
//1: getItem , getItem will take only id
//2:setItem ,setItem will take an Id and a value
//it will store value in form of string and when we take it we will have to convert in into JSON

useEffect (()=>{
  const todos =JSON.parse(localStorage.getItem('todos')) 
  //this is how we can get the Items from local storage ,local storage can be accessed directly in js
  if(todos && todos.length > 0){
    //checking of the todos is actually in the local storage or not if its there then only bring it
    setTodos(todos)
  }
},[])

//set Item
useEffect(()=>{
  localStorage.setItem('todos' ,JSON.stringify(todos));
  //id should be same  to getItems and setItems JSON.stringify is used to convert json to string
},[todos])
//after this lets create a components







  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen  py-8">
                <div className="w-full max-w-2xl bg-[#c5c5c5] mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Add Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                          {todos.map((todo)=>(
                            <div key={todo.id} //Key is important to define for better optimisation
                            className='w-full'>
                              <TodoItem todo={todo} /> {/*Am passing its component prop here*/}

                              
                               </div>
                          ))}

                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App

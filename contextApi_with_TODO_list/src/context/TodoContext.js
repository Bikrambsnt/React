

//Here we will create a todo app with a local storage to store the todos


import React,{useContext ,createContext} from 'react'

export const TodoContext = createContext({

    todos: [

        {
            id:1,
            todo: 'Todo msg',
            completed:false
        },

        //this is how my todos will be added on...
        
    ],//this are the properties .

    //This are the functionality and we wont write the function defination here we will just write its name.


    //here todo means the todo msg and Id means the id  now we will write its defination on the app.js file 
    addTodo:(todo)=>{},
    updateTodo:(id,todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete:(id) =>{}

})

export const useTodo = ()=>{

    return useContext(TodoContext)

}
export const TodoProvider = TodoContext.Provider
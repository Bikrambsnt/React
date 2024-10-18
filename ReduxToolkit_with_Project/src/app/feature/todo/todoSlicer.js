

  //here we will create a reducer or a slicer

  //here I will use  two ways to create this reducer

  import { createSlice,nanoid } from "@reduxjs/toolkit";
  //here nanoid is used to create a unique id as in previous I have used Date method to create a unique id but reduxtoolkit 



  //now we will make a initial state for the store 

  const initialState ={
    todos: [{id:1 , text:''}]
    //this are the initial state of my todo 
  }
  
  // now we will create slice for our reducers 

  export const todoSlice = createSlice ({
    name: 'todo',
    initialState,
    //now here we will make the reducer reducer is just a properties, reducer will have properties and function 
    reducers: {
        addTodo: (state,action)=>{

            const todo = {
                id: nanoid(),
                text: action.payload
                //in this we will take the todo text from the action in which payload will be used (payload is just a object in which anything can be given)
            }
            state.todos.push(todo);
            //now here i have added the todo to the state to update the state

        },
        //while doing add we will always get two things that is state and another one is action, this will happens everytime as it is a syntax
        //now state is used to get the current state of initialState either it has lots  of todos or its an empty, so state will give the access to the current situation of initialState

        //action will be used to assign the value like when we try to remove the todo then removeTodo expect the id of which todo has to be removed so to assign thath id action will be used




        removeTodo: (state,action)=>{
            state.todos = state.todos.filter ((todo)=> todo.id !== action.payload)
            //here whichever id will not match with the action payload they will return as false
        },


        //in reducer we will write the defination of a function also not only declaration
    }


    //so the slicer will be created with the method and name and initial state should be declare 
  })

  //now we have to export the reducer functionality because while updating the state we will use the functionality individually in components

  export const {addTodo ,removeTodo } = todoSlice.actions;


  //this rducer is export because to aware the store 
  export const todoReducer= todoSlice.reducer;

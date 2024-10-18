
//Here I will create a store for my redux ..

import { configureStore } from "@reduxjs/toolkit";//this method is came from core reduc not from the react
import {todoReducer} from "./feature/todo/todoSlicer"; 

export const store = configureStore({
    reducer:todoReducer//this is came from the reducer which is in todoSlice



}) //this will mostly takes object only.
//after creating store we will create a reducer or in redux toolkit reducer can be called as slicer



//this will for user authentication to ask store is user loggin or not

import {createSlice} from "@reduxjs/toolkit";

//here we will create our Initial state 

const initialState = {

    status: false,
    userData:null, //by default value

}

const authSlice = createSlice({
    name:"auth", // its a syntax
    initialState,
    reducers: {

        login: (state ,action) =>{

            state.status=true;
            state.userData=action.payload.userData;
        
        },

        logout: (state) => { // here I have a access to action also but no needed right now so no need to write
            state.status =false;
            state.userData = null;
        }

    }

})

export const {login,logout} = authSlice.actions; // the above reducers properties are called actions.

export default authSlice.reducer;

//now our store is ready
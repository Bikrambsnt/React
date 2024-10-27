import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/auth";
import { logout } from "../../store/authSlice";


function Logout (){

const dispatch = useDispatch()

const logoutHandler = ()=>{
  authService.userLoggedOut()
  //this userLoggedOut() is a promise so we have to handle this ..
  .then(() =>{
    dispatch(logout())
  })
}

    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</button>
    )
}

export default Logout;
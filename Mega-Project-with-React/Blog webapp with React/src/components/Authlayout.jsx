
//This is used to protect the routs and pages or how we can use the created login logout methods created in store...

import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



function Protected ({children , authentication=true}){


    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        //the logic for this will be 
        //1st. authentication = true && authStatus(suppose its false) !== true ehich means false !== true (0!==1 final answer will be true ) so
        // true && true (so if both are tre then navigate to login)..
        if(authentication && authStatus !== authentication){
            navigate('/login')

        }

        //here authentication is true as default so I make it false and suppose authstatus is true
        //false && true!==true (meaning 1!==1 which is not correct means false) so
        //false && false then navigate to root.
        else if(!authentication && authStatus !== authentication){
            navigate('/')


        }
        setLoader(false)
    },[authStatus,navigate,authentication])

    return loader ? <h1>Loading</h1> :<>{children}</>
}

export default Protected
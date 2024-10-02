
//There are two ways to create this providers 
//This first one is

import React from 'react'
import Context from './Context'


const ContextProvider = ({children})=>{  //So am passing cildern here because with this we will pass the incoming value 
    const [data,setData] =React.useState('');
    return (

        //Here same thing is happening as I said wrap components inside the cretated context
        

        <Context.Provider value={{data,setData}}> {/* This context need a property also known as provider we have to add this also now something is needed to hold the value of this provider so we will create it with useState after that i will 
        pass whatever I have to with the value in provider in form of object
        so till here is a setup for the context*/} 
        
        {children}
        </Context.Provider>

    )


}

export default ContextProvider;

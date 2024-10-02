import { useState } from 'react'
import ContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <ContextProvider> {/*Finally the context provider will be called here Now whatever I will add inside this will get the direct access*/}
      
      <Login />
      <Profile />


    </ContextProvider>
  )
}

export default App

//so this is the part one project of context project 

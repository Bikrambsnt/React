
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './Appwrite/auth';
import './App.css'
import { login,logout } from './store/authSlice';
import { Header,Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // // processing .env file
  //Better approach to do this is using conf folder


 //now we will setup the redux toolkit here..
  //here I will set the loading ui also ..

  const [loading ,setLoading] = useState(true);//default is true because i want loading at first while the page open ...
  const dispatch = useDispatch()

  useEffect ( () => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        //here I will dispatch the method login and logout
        dispatch(login({userData})) 
        //am passing the userData data in object here
      }
      else{
        dispatch(logout())
        //with this my state will always updated.. 
      }
    })
    .finally(()=> setLoading(false))
    //after the userData update  I will update the loading to false
  } ,[])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap  content-between bg-gray-400'>
      <div className='w-full block'>
      <Header/>
      <main>
        Updating <Outlet />
      </main>
      <Footer />
      </div>
    </div>
  ) :null
}

export default App

import { useState ,useEffect} from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {

  //I am adding functionality to that value here with the same variable name

  const [themeMode,setThemeMode] =useState('light');

  const darkTheme= ()=>{
    setThemeMode('dark');
  }
  const lightTheme= ()=>{
    setThemeMode('light');
  }

  //now the functionality to change the theme in actual should be written in js we have to take the access of html and change the theme

   useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light'); //Remove the default value
    document.querySelector('html').classList.add(themeMode); //add themeMode because above we define already themeMode functionality
   },[themeMode])//dependencies


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}> {/*I am taking this values from the Theme.js as it was already define there  */}
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>

            </ThemeProvider>
      
  )
}

export default App

//So thats all about Context api 
//Happy Coding
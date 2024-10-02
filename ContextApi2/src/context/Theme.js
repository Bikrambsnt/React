

//Here am creating context in a different way as compare to the first one here I will create context,provider, custom hook at the same file and export it

import React, {useContext,createContext} from 'react'
import ContextProvider from '../../../Context_Api/src/context/ContextProvider'

export const ThemeContext =createContext({ //In first one we are not passing anything here but in this am passing an object

    themeMode: 'light',
    darkTheme: ()=> {},
    lightTheme: () => {}
    //Here just am defining the method for two elements and a default value that is light

})

//Conext provider

export const ThemeProvider =ThemeContext.Provider;

//custom hook

export default function useTheme(){
    return useContext(ThemeContext) 
}

//now wrap the elements with ThemeProvider component on App.js
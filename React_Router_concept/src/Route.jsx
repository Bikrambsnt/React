

//This route file is made because I have that header and footer in a same position and only the middle of those bothse shoud be change so
//I can define that here which is done by the outlet provided by router dom it 
//so  I have to place outlet where I want to change like

import { Outlet } from 'react-router-dom'

import React from 'react'
import Header from './components/Headers/Headers'
import Footer from './components/Footers/Footer'


function Router (){

return (
<>
 <Header />
 <Outlet /> {/*Placed It here because  I want to change this part  */}
<Footer />

</>

)

}

export default Router;
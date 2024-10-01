import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Router from './Route'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/user'
import Github, { githubInfo } from './components/Github/Github'

// const router = createBrowserRouter ([
// {
//   path: '/',
//   element:<Router />,
//   children: [
//     {
//       path : '',
//       element:<Home/>


//     },
//      {

//       path:'about',
//       element: <About />
//      },

//      {
//       path:'Contact',
//       element:<Contact />
//      }
//   ]

//   // So here path is the path for the page and elements refers to the elements of the page like in root path I have given Router element which defines which to set fix and which will be changes
//   //so in this root path there will be its childrens like home ,about,contact pages so for that it will be in a array and same process will be followed
// }

// ])




//Another option is also there to create this route which is much clean

const router = createBrowserRouter (

  createRoutesFromElements(
  <Route path='/' element={<Router/>}>
    <Route path='' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='user/:userid' element={<User />} /> {/*From this component we can take the user name,id etc from the url to the page */}
    
    {/* from Here I can directly fetch the github data with loader*/}
    <Route loader={githubInfo} path='github' element={<Github/>}/>

  </Route>

  //this approcah is much easy to understand

  )

)




createRoot(document.getElementById('root')).render(

  <StrictMode>
     {/* Here we have to call it so it has some options like I can use router provider which is a self closing tag */}
     <RouterProvider router={router} />  {/*This component takes  a prope so we have to give it a prop so I have to create the method for define router*/}
  </StrictMode>,
)


//This is all about React Router 
//Happy Coding
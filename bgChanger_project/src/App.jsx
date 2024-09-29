import { useState } from 'react'

function App() {
 let [color,setColor] = useState('purpleioererj');
  

  return (
    <>
    <div className='w-full h-screen flex  flex-wrap  justify-center items-center'
    style={{backgroundColor:color}}> {/*This is the syntax to use inline css in react ,here I dont have to use another curly braces because background color is already inside a double braces */}
       
       
       
        <div className='flex flex-wrap gap-4 text-white font-semibold'>

           {/* <button onClick={setColor('red') } className='px-8 py-3 bg-red-600 outline-none rounded-xl'>Red</button>  Here I cant assign value to the setCOlor function because onclick expext to return a call back function but here we are returning its refrence which onclick doesnt want so better we can do this*/}

           <button onClick={()=> setColor('red') } className='px-8 py-3 bg-red-600 outline-none rounded-xl'>Red</button> 
          {/*Here I am returning finction woth a function as onclick expect  */}

          <button onClick={()=> setColor('blue')} className='px-8 py-3 bg-blue-600 outline-none rounded-xl'>Blue</button>
          <button onClick={()=> setColor('yellow')} className='px-8 py-3 bg-yellow-600 outline-none rounded-xl'>Yellow</button>
          <button onClick={()=> setColor('orange')} className='px-8 py-3 bg-orange-600 outline-none rounded-xl'>Orange</button>
        </div>
       
    </div>
      
    </>
  )
}

export default App

import { useState } from 'react'

function App() {
 let [color,setColor] = useState('balck');
  

  return (
    <>
    <div className='w-full h-screen flex  flex-wrap  justify-center items-center'
    style={{backgroundColor:color}}> {/*here I dont have to use another curly braces because background color is already inside a double braces */}
       
       
       
        <div className='flex flex-wrap gap-4 text-white font-semibold'>
          {/* <button onClick={()=> setColor('red') }  className='px-8 py-3 bg-red-600 outline-none rounded-xl'>Red</button> 
          I can do it like this like this but the  */}
          <button onClick={()=> setColor('red') }  className='px-8 py-3 bg-red-600 outline-none rounded-xl'>Red</button>
          <button className='px-8 py-3 bg-blue-600 outline-none rounded-xl'>Blue</button>
          <button className='px-8 py-3 bg-yellow-600 outline-none rounded-xl'>Yellow</button>
          <button className='px-8 py-3 bg-orange-600 outline-none rounded-xl'>Orange</button>
        </div>
       
    </div>
      
    </>
  )
}

export default App

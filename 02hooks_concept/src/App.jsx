import './App.css'
import { useState } from 'react'; /*use State hooks  */

function App() {

  // Now here I have created a simple counter which should increase its value when I click in add value button
  // But the problem is that in  UI its not adding any value even I have written the code for that
  // but the code is correct as we can see that the value is increasing in console

  // so now the concept of react hooks will be used here.
  // hooks has to be import with react and hooks can be different as per the use case , here I will use useState hook to update thr UI value

//  let counter=10;
// function add(){
//   counter +=1;
//   console.log('clicked',counter)
// }

// with hook state


 let [counter, setCounter]=  useState(10) /*This is a method so parentheses is required inside this it will take a default  value it can be anyting true false,0,1,object anything ,in my case its 10 */
 // after that we have to store it in a variable,so from useState we got a 2 value that is counter and a setCounter,setCounter is not a value its a function (we can define our custom name also) in a array form so we have to store inside an array.
// the default value of the counter will be 10 because we have given 10 to useState as a default value


function add(){
 if(counter===20){
  console.log('Value cannot exceed more than 20');
 }
  counter +=1;
  setCounter(counter); /*I can give it like this or I can do */
  // setCounter(counter+=1); this also I can do.
  console.log('clicked',counter);
}
function remove(){
if(counter===0){
  console.log('Value cannot go to negative')
}
  setCounter(counter -=1);
}

  return (
    <>

  <h1>Counter</h1>

  <h2>Count {counter}</h2>

  <button onClick={add} className='btn'>Add counter</button>

  <button onClick={remove}>Decrease counter</button>
     
    </>


  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
/* props is used to make the components reusable which means above I have a card so I can store that card on a component and can use again and again  */

 let obj= {
  name:"Bikram",
  age:22
 } /*Like this I have to declare it first to pass this obj in the prob*/

//  array example

let arr =[1,34,5,3,5,3];
return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>React Props</h1>
     {/* <div class="max-w-sm rounded overflow-hidden shadow-lg ">
  <img class="w-full" src="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}


{/* SO instead of doing this I can store this in a folder then I can call it with its component ,lets create a folderr and store it */}

{/* calling  the components */}

{/* <Card  name="Bikram" obj={obj} arr={arr}/> */}
{/* now here I can Inject that declare obj here  */}

{/* now here I can give the value to the probs like */}

<Card heading="Sunset" paragraph="Sunset is Beautiful"/>
<Card heading="Sunset at noon" paragraph="noon sunset is kind of Impossible"/>
{/* Like this I can do it */}




{/* <Card />
<Card /> */}

{/* Now Like this  I cant create any amount of card  want, but now the problem is that the content of the card is
remain the same , now here the concept of props(properties) use*/}


{/* <Card /> here I can get that props like <Card name='Bikram'/>   now If I want to pass array or object I cannot pass it like this <Card name="Bikram" obj={} arr=[1,3,4,3] beacuse as we 
already know that it will create a tree structure so we have to declare it first then we can inject its variable ecample above*/}

    </>
  )
}

export default App

import { useState,useCallback,useEffect,useRef } from 'react'

function App() {

  let [password,setPassword] =useState("");
  let [length,setLength] =useState(8);

  let [number,setNumber] =useState(false);

  let [character,setCharacter] = useState(false);


  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Copy to clipboard
  // UseRef hook

  let passwordRef=useRef(null) /*As I dont have any default value do null*/
  let messsageRef=useRef(null);
  
  const copyPassword=useCallback((e)=>{
    //we can create it without using useCallback but for better approach I have use it
    passwordRef.current?.select();/*using ? to select optionally because value can be null*/
    passwordRef.current?.setSelectionRange(0,999);/*here am asying how much to select from where to where */
    window.navigator.clipboard.writeText(password)

    messsageRef.current.innerHTML="Password Copied"

    setTimeout(()=>{
      messsageRef.current.innerHTML=""
    },2000)
  },[password]) /*password as a dependies because it is related with the password as I want to get the password when I click that button*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // The logic for password generator will be here

  // const passGenerator = ()=>{
  //   // now here the problem is that I have to call this function again and again like when I check on number then It should add a number similarly a character so to call this function again and again
  //   // we have to use a hook called callback it will call the function when I perform any operation
  //   //now call back take two parameters that is one is a function and another is a dependies which is passed as a array,dependies means in which it will be dependent
  //   //Lets use it same this will be use
  // }

  const passGenerator =useCallback(()=>{

    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number) str+= '0123456789' /*Here I am adding the condition that if number becomes true which is initially false then add number on string simple */

    if(character) str+= '@#.,()*%+-!'; /*Here also same thing */

    // now I will use loop to genrate passoword and how many times loop will run will be decided by the length

    for (let i = 1; i <=length; i++) {
      // now make it random 

      let result = Math.floor(Math.random() * str.length + 1);
      // console.log(result);
      // here I will got the character Index value so I have to stract character from that

      pass += str.charAt(result); /* Here + is required because we are overwritting the value of a pass so to concatinate it we will use +*/
      
    }
    setPassword(pass);
    

  },[length,number,character,setPassword]) /*here in dependies I am passing the variables which I am going to call again and again */
  /* Another thing is that here I have added setPassword also it is because for the memoize or for the better performance it will work even we dont use it*/



  /* now If I want to call this passGenerator function then I can do
    passGenerator()
    but this will be not allowed by the react as the rendering problem occurs which I cant control so to cLL IT i can use a button to click and call it
    but better than that I can use anoter hook name as useEffect hook
    it is also similar to useCallback hook it will take the callback and dependies in which it will depends which means when to run like if I click on number,length etc
    */

    useEffect(()=>{
  passGenerator() /*Here I have call it */
  // console.log(passGenerator)
    },[length,number,character,passGenerator])


  return (
    <>
    <div className='w-full  bg-black flex justify-center h-screen items-center'>
    <div className='bg-gray-700 w-2/4 h-60 rounded-xl '>
    <h1 className='text-center text-white font-semibold text-xl mt-3'>Password Generator</h1>

    <div className='flex justify-center w-full  items-center mt-10'>
      <input type='text'
      className=' outline-none w-[60%] p-2 rounded-lg text-orange-500 text-xl font-normal'
      placeholder='Generated password'
      readOnly
      value={password}
      ref={passwordRef}/*Now it gets the refrence of the copy button */
      >
      </input>
      {/* Now at last lets see how we can do copy of that password by clicking on this copy button

        this buttons are not related to each others so at first to relate them we have to use the hook called useRef
        useRef is used to get the refrence of any elements 

      */}
      <button onClick={copyPassword} className='cursor-pointer text-white  font-semibold text-base bg-slate-500 outline-none w-20 p-[0.6rem] rounded-lg -ml-14 hover:bg-slate-400'>Copy</button>



    </div>

      <div className='flex justify-center mt-10 space-x-2  text-white font-medium'>
   
        <input type='range'
        min={8}
        max={100}
        

        className='cursor-pointer '
        value={length}
        // {/* here I have to add a onchange event to change the range value */}
        onChange={(e)=>{setLength(e.target.value)}} 
        >
          
        
        </input>
        <label>Length {length}</label>

        <input type='checkbox'
        className='cursor'
        defaultChecked={number}
        onChange={()=>{
          setNumber((prev)=> !prev)/*this means if when it will get change then reverse the previous value that means if its true then make it false and if its false then make it true to avoid stuck on a same statement afterfirst click */
        }
      }
      // if I do this then It will create a problem
      /*
      onChange{()=>{
        setNumber(true)

        now this will remain true after the click so better I have fire a callback to handle this problem
        }}
      
      
      */
        
        >
        
        </input>
          <label>Numbers</label>

        <input type='checkbox'
        defaultChecked={character}
        className='cursor'
        onChange={()=>{
          setCharacter((prev)=>!prev)
        }}
        >
        
        </input>
          <label>Characters</label>


      </div>
      <div ref={messsageRef} className='text-orange-400 text-center font-medium mt-4'></div>
    </div>

    

    </div>
    
 


    </>
  )
}

export default App

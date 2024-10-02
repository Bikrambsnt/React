//Lets check actually how context works


import React,{useState,useContext} from 'react'

import Context from '../context/Context'

function Login (){

    const [username ,setUsername] = useState ('');
    const [password ,setPassword] =useState ('');

    const {setData} = useContext(Context) //here data came from the contextProvider.jsx file as we are pasing value from there

    const submit = (e)=>{
        e.preventDefault();
        setData({username,password});

    }
return(
<>

<div className='flex w-full bg-gray-700 h-96 justify-center items-center'>

<div className='  p-10 flex flex-col items-center space-y-10 w-96 h-fit rounded-xl bg-slate-600'>
<input

className='px-2 p-2 w-full outline-none rounded-lg font-medium text-black'

type='text'
placeholder='Username'
value={username}
onChange={(e)=> setUsername(e.target.value)}


/>

<input 
className='px-2 p-2 w-full outline-none rounded-lg font-medium text-black'
 type='text'
 placeholder='password'
 value={password}
 onChange={(e)=> setPassword(e.target.value)}
/>

<button className='p-2 bg-white w-32 rounded-lg items-center text-black font-medium hover:bg-slate-200' onClick={submit}>Submit</button>

<div className='text-white font-normal'></div>
</div>
</div>
</>
)

}
export default Login

//Now from here we have sended the data now to take the data we have a profile.jsx file in which we will use data to take the data which is in ContextProvider.jsx file
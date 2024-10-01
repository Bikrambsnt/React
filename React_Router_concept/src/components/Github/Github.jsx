

import React, {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom';





function Github (){
    const data =useLoaderData()
// const [data ,setData] =useState([])
//     useEffect(()=>{

//         fetch('https://api.github.com/users/Bikrambsnt')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         })
//     },[])
    

    return (

        <div className=' text-center text-white font-medium text-3xl m-4 h-72 bg-gray-700 rounded-lg'>Followers : {data.followers}
        
        <span className='flex justify-center items-center mt-6'>
            <img src={data.avatar_url} alt='profile' width={200} className='rounded-full'></img>
        </span>
        
        </div>

    )
}

export default Github;

//Now instead of fetching like this I can use loaders concept to fetch the data in a optimize way

 export const githubInfo =async ()=>{
  const response = await fetch ('https://api.github.com/users/Bikrambsnt')
    return  response.json();
 }
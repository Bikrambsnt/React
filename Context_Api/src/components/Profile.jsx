
import React ,{useContext} from 'react'
import Context from '../context/Context'

function Profile (){

  const {data} = useContext(Context)

  if(!data) return  <div className=' text-center  font-medium text-3xl text-black'>Please Enter Data </div>

  return <div className=' text-center  font-medium text-3xl text-black'>Welcome {data.username}</div>

  //This is how  I will take the data
  //now add these components on app.jsx
}
export default Profile;
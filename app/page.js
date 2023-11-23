"use client"
/* two way binding :
import React, { useState } from 'react'

const page = () => {
  const [username, setUsername] = useState("")
  return (
    <>
    <h1 className='mb-5 text-2xl'>enter your name : </h1>
    <form>
      <input type="text" className='border-2 border-zinc-800 px-4 py-2 text-xl'
       value={username}
       onChange={(e)=>
       {
        console.log(e.target.value)
       }}>
      </input>
      </form>
    </>
    )
}
export default page
*/
/* routing:
import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='text-2xl font-bold'>this is home page</h1>
    <a href='/Contact'>Contact</a>
    </>
  )
}

export default page*/

 //calling api & use effect also passing id as props to id folder 
 /*"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [users, setUsers] = useState([])
  const getUsers = async()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data) 
  };
  useEffect(() => {
    
    getUsers()
  }, [])
  
  return (
    <>
      <button onClick={getUsers} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>
      <div className='p-8 bg-slate-100 mt-5'>
        <ul>
          {users.map((e)=>{
            return <li>{e.username}---<a href={`/${e.id}`}>explore</a></li>
          })}
        </ul>
      </div>
    </>
  )
}

export default page*/
// here we have tranfered data from app.js to header then header to nav and this is
// not the right way to pass the data for that we use CONTEXT API in 
//this we save the data and any one either header or Nav wants to use both can use this data
/*import React, { useState } from 'react'
import Header from './Components/Header'

const page = () => {
  const [num, setnum] = useState(10)
  return (
    <div>
      this is home page
      <Header num={num}/>
    </div>
  )
}

export default page*/

// context api:
/*import React, { useContext } from 'react'
import { MyContext } from './Helper/Context'
import Header from './Components/Header'
const page = () => {
 const user =  useContext(MyContext)
  return (
    <div>{user} home page
    <Header/>
    </div>
  )
}

export default page*/

// Showing flash messages with tostify:
/*import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const notify=()=>{
    toast.success('🦄 wow Sourabh this is amazing', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });  }
  return (
    <>
    <button onClick={notify}>Login</button>
    <ToastContainer/>
    </>
  )
}

export default page*/
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {
  const [userdata, setuserdata] = useState("")
  const [num, setnum] = useState(10)
  const getData = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list")
    const a = JSON.stringify(response.data)
    console.log(a)
    setuserdata(a)
  }
  return (
    <div>
      page
      <button onClick={getData}>Click</button>
      {userdata}
      </div>
  )
}

export default page
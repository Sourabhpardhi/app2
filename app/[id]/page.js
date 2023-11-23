// used this folder and file to understand after api calling showing data 
//by clicking on a particular data here we will 
//understand how we can show data of a particular id 
//using useState and some more method like stringyfy 
/*import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = ({params}) => {
  const {id} = params;
  const [users, setUsers] = useState("")
  const getUsers = async()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    setUsers(data)
  };
  useEffect(() => {

    getUsers()
  }, [])

  return (
    <div>page { JSON.stringify(users)}</div>
  )
}

export default page*/
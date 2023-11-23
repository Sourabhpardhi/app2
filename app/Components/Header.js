import React, { useContext } from 'react'
import { MyContext } from '../Helper/Context'
const Header = (props) => {
  const user = useContext(MyContext)
    return (
    /*<div className='bg-green-500 p-5 font-extrabold'>
      
        i am Header
        <Nav num={props.num}/>
    </div>*/
    <div className='bg-green-500 p-5 font-extrabold'>{user}</div>
  )
}

export default Header
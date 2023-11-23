import React from 'react'

const Nav = (props) => {
    console.log(props.num);

  return (
    <div className='bg-pink-400 p-5 font-bold'>this is Nav {props.num}</div>
  )
}

export default Nav
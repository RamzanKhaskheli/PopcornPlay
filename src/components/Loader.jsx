import React from 'react'
import loader from "/loader.gif"

const Loader = () => {
  return (
    <div className='w-screen bg-zinc-700 h-screen flex justify-center items-center'>
        <img className='w-[20%] h-[20%]' src={loader}/>
    </div>
  )
}

export default Loader
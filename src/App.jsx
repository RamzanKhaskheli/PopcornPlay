import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home' 
import Trending from './components/Trending'

const App = () => {
  return (
    <div className='bg-[#6D28D9] h-screen w-screen '>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
      </Routes>
      
    </div>
  )
}

export default App
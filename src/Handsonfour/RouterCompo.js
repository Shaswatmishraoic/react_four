import React from 'react'
import Home from './Home'
import Students from './Students'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom';



function RouterCompo() {
  return (
    <>
    
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
    

    </>
  )
}

export default RouterCompo

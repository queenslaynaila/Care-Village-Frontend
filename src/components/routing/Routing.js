import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CompleteRegister from '../pages/CompleteRegister'
import Register from '../pages/Register'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/register/complete' element={<CompleteRegister></CompleteRegister>}></Route>
    </Routes>
  )
}

export default Routing
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
import Basket from '../pages/basket/Basket'
import Home from '../pages/home/Home'

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/basket' element={<Basket/>}/>
    <Route path='/admin' element={<Admin/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router

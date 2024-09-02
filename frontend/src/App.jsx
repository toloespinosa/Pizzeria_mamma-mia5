import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pizza from './pages/Pizza'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navegation from './components/Navegation'

import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Navegation></Navegation>
    <Routes>
      <Route path='/' element = {<Home></Home>} />
      <Route path='/login' element = {<Login></Login>} />
      <Route path='/register' element = {<Register></Register>} />
      <Route path='/pizza/:id' element = {<Pizza></Pizza>} />
      <Route path='/cart' element = {<Cart></Cart>} />
      <Route path='/profile' element = {<Profile></Profile>} />
      <Route path='/404' element = {<NotFound></NotFound>} />
      <Route path='/*' element = {<NotFound></NotFound>} />
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App

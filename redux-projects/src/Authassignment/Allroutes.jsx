import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import { Home } from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Privateroute from './Privateroute'
import Userdata from './Userdata'
import Userdetails from './Userdetails'



const Allroutes = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route path='/userdata' element={
        <Privateroute>
          <Userdata></Userdata>
         </Privateroute> }>
         </Route>
        <Route path='/userdata/:id' element={<Userdetails></Userdetails>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>

    </Routes>
    </div>
  )
}

export default Allroutes
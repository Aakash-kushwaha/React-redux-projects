import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/userdata">User data</Link>
    <Link to="/Login">Log in</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Orders from '../pages/Orders'
import Product from '../pages/Product'
import Products from '../pages/Products'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        
    </Routes>
  )
}

export default Allroutes
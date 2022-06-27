import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Allroutes from './components/Allroutes'
import Navbar from './components/Navbar'
import {ChakraProvider} from "@chakra-ui/react"
import {Provider} from "react-redux"
import {store} from "./Redux/store"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"]="application/json"

const ShowEcommerceApp = () => {
  return (
    <div><BrowserRouter>
    <ChakraProvider>
    <Provider store={store}>
    <Navbar></Navbar>
    <Allroutes></Allroutes>
    </Provider>
    </ChakraProvider> 
    </BrowserRouter>
    </div>
  )
}

export default ShowEcommerceApp
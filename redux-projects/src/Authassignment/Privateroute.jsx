import React from 'react'
import { Navigate } from 'react-router-dom'
import { hide } from './Authprovider'


const Privateroute = ({children}) => {

  const [state] = React.useContext(hide)

  if(state.isAuth){
   return children
  }
  return <Navigate to="/Login"></Navigate>

}

export default Privateroute
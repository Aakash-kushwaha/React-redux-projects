import React from 'react'
import { Provider } from 'react-redux'
import Todos from './pages/Todos'
import {store} from "./Redux/store"

const Showtodothunk = () => {
  return (
    <div>
   <Provider store={store}>
    <Todos></Todos>
    </Provider>
    </div>
  )
}

export default Showtodothunk
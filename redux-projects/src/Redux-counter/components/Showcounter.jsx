import React from 'react'
import Counter from '../Counter'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import Todo from '../Todo'



const Showcounter = () => {
  return (<ReduxProvider store={store}>
    <div>
    <Counter></Counter>
    <Todo></Todo>
    </div>
    </ReduxProvider>
  )
}

export default Showcounter
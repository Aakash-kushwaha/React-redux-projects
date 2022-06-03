import React from 'react'
import Counter from '../Counter'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'



const Showcounter = () => {
  return (<ReduxProvider store={store}>
    <div>
    <Counter></Counter>
    </div>
    </ReduxProvider>
  )
}

export default Showcounter
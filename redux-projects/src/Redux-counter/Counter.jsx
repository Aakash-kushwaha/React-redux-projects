import React from 'react'
import { store } from './components/store'
import { useDispatch , useSelector } from 'react-redux'
import { addCount, double, removeCount, devide } from './components/action'

const Counter = () => {
    const dispatch = useDispatch()
     const count = useSelector((store)=>store.count)
    console.log(store.getState().count)

  return (<>
    <h1>counter {count}</h1>
    <button onClick={()=>dispatch(addCount(1))}>Add</button>
    <button onClick={()=>dispatch(removeCount(1))}> Reduce</button>
    <button onClick={()=>dispatch(double(2))}>Double</button>
    <button onClick={()=>dispatch(devide(2))}>Divide By 2</button>
    </>)
}

export default Counter
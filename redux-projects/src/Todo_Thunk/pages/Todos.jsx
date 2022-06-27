import React from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../Redux/action'
import Addtodo from './Addtodo'
import Todolist from './Todolist'

const Todos = () => {

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getTodos())
    },[])


  return (
    <div>
    <Addtodo></Addtodo>
    <Todolist></Todolist>
    </div>
  )
}

export default Todos
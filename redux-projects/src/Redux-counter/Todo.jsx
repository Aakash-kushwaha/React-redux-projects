import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getData, gettodofailure, gettodorequest, gettodosuccess } from './todocompo/Action'
import Todoinput from './Todoinput'
import Todolist from './Todolist'

const Todo = () => {
    
  const dispatch = useDispatch()



  React.useEffect(()=>{
   getData(dispatch)
  
  },[])
    
  return (
    <div>
   <Todoinput></Todoinput>
   <br></br>
    <Todolist></Todolist>
    </div>
  )
}

export default Todo
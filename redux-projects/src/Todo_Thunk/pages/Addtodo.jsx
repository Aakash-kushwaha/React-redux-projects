import React from 'react'
import { useDispatch } from 'react-redux'
import { postTodo } from '../Redux/action'

const Addtodo = () => {
    const [value,setValue] = React.useState("")
    const dispatch= useDispatch()
    const Addtodo=()=>{
       dispatch(postTodo({name:value,status:false}))
    }
  return (
    <div>
       <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
       <button onClick={Addtodo}>Add</button>
    </div>
  )
}

export default Addtodo
import React from 'react'
import { useDispatch } from 'react-redux'
import { getData, gettodosuccess, setData } from './todocompo/Action'

const Todoinput = () => {
    const [text,setText]= React.useState("")
    const dispatch = useDispatch()

    const handleaddTodo=()=>{
     setData(dispatch,text)
     .then(()=>getData(dispatch))
  
    }
  return (
    <div>
     <input placeholder='set Todo' value={text} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={handleaddTodo}>Set</button>
    </div>
  )
}

export default Todoinput
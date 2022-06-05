import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Todolist = () => {
    const Todos = useSelector((store)=>store.todoreducer.todo)
    const loading= useSelector((store)=>store.todoreducer.loadin)
    console.log(Todos,"todos")
    console.log(loading,"loading")




  return (
    <div>

     {
       loading?<div>...loading</div>:
        Todos.map((el)=><div key={el.id}>{el.name}</div>)
    }
    </div>
  )
}

export default Todolist
import React from 'react'
import { useSelector } from 'react-redux'

const Todolist = () => {


    const todo = useSelector((store)=>store.todo)
    const Loading = useSelector((store)=>store.isLoading)
    console.log(todo,"todo")




  return (
    <div>
    {
       Loading? <div>...loading</div> :
        todo.map((el)=>{
            return <div key={el.id}>{el.name}</div>
        })
    }
    </div>
  )
}

export default Todolist
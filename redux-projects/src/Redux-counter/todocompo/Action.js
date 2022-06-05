import axios from "axios"




export const todoActions={
    GET_TODO_REQUEST:"GET_TODO_REQUEST",
    GET_TODO_SUCCESS:"GET_TODO_SUCCESS",
    GET_TODO_FAILURE:"GET_TODO_FAILURE",
    ADD_TODO_REQUEST:"ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE"
}

export const gettodorequest=()=>({
   type: todoActions.GET_TODO_REQUEST
})
export const gettodosuccess=(data)=>({
    type:todoActions.GET_TODO_SUCCESS,
    payload: data
})

export const gettodofailure=()=>({
    type:todoActions.GET_TODO_FAILURE
})


export const addtodorequest=()=>({
    type: todoActions.ADD_TODO_REQUEST
 })
 export const addtodosuccess=(data)=>({
     type:todoActions.ADD_TODO_SUCCESS,
     payload: data
 })
 
 export const addtodofailure=()=>({
     type:todoActions.ADD_TODO_FAILURE
 })



export const getData=(dispatch)=>{
    dispatch(gettodorequest())
   return axios({
        url:"http://localhost:3000/posts",
        method:"GET",
    
      })
      .then((res)=>dispatch(
        gettodosuccess(res.data)
       ))
       .catch((err)=>dispatch(
         gettodofailure(err)
       ))
}

 


export const setData=(dispatch,name)=>{
    dispatch(addtodorequest())
       return axios({
        url:"http://localhost:3000/posts",
        method:"POST",
        data:{
        name
        }
    
      })
      .then((res)=>dispatch(
        addtodosuccess(res.data)
       ))
       .catch((err)=>dispatch(
         addtodofailure(err)
       ))
}
 


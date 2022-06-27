import axios from "axios"
import * as types from "./actionType"


const posttodorequest =()=>{
    return {
        type :types.POST_TODO_REQUEST
    }
}

const posttodosuccess =(payload)=>{
    return {
        type :types.POST_TODO_SUCCESS,
        payload
    }
}
const posttodofailure =(payload)=>{
    return {
        type :types.POST_TODO_FAILURE,
        payload
    }
}


const postTodo=(payload)=>(dispatch)=>{
    dispatch(posttodorequest())
    axios.post("http://localhost:8080/todos",payload)
    .then((res)=>{dispatch(posttodosuccess(res.data)); getTodos()})
    .catch((err)=>{dispatch(posttodofailure(err))})
}














const getTodorequest =()=>{
    return {
        type :types.GET_TODO_REQUEST
    }
}

const getTodosuccess =(payload)=>{
    return {
        type :types.GET_TODO_SUCCESS,
        payload
    }
}
const getTodofailure =(payload)=>{
    return {
        type :types.GET_TODO_FAILURE,
        payload
    }
}


const getTodos=(payload)=>(dispatch)=>{
    console.log("hello")
    dispatch(getTodorequest())
    axios.get("http://localhost:8080/todos")
    .then((res)=>{dispatch(getTodosuccess(res.data))})
    .catch((err)=>{dispatch(getTodofailure(err))})
}











export {postTodo,getTodos}
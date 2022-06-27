import * as types from "./actionType"

const initstate={
    isLoading:false,
    isError:null,
    todo:[]
}


const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case types.POST_TODO_REQUEST:{
            return{
             ...state,
             isLoading:true,
            
            }
        }
        case types.POST_TODO_SUCCESS:{
            return{
             ...state,
             isLoading:false,
            }
        }
        case types.POST_TODO_FAILURE:{
            return{
             ...state,
             isLoading:false,
             isError:payload
            }
        }
        case types.GET_TODO_REQUEST:{
            return{
             ...state,
             isLoading:true,
            
            }
        }
        case types.GET_TODO_SUCCESS:{
            return{
             ...state,
             isLoading:false,
             todo:payload
            }
        }
        case types.GET_TODO_FAILURE:{
            return{
             ...state,
             isLoading:false,
             isError:payload
            }
        }
        default:
            return state
    }
}


export default reducer
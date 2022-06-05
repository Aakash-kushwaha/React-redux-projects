import { todoActions } from "./Action";

const initstate={
    loadin:false,
    todo:[],
    error:false
}

export const reducer=(state=initstate,action)=>{
    switch(action.type){
        case todoActions.GET_TODO_REQUEST:{
            return{
                ...state,
                loadin:true
            }
        }
        case todoActions.GET_TODO_SUCCESS:{
            return{
               ...state,
               loadin:false,
               todo:action.payload
            }
        }
        case todoActions.GET_TODO_FAILURE:{
            return{
               ...state,
                error:true,
                loadin:false
            }
        }
        case todoActions.ADD_TODO_REQUEST:{
            return{
                ...state,
                loadin:true
            }
        }
        case todoActions.ADD_TODO_SUCCESS:{
            return{
               ...state,
               loadin:false,
              
            }
        }
        case todoActions.ADD_TODO_FAILURE:{
            return{
               ...state,
                error:true,
                loadin:false
            }
        }
        default:return state
    }
}
import * as types from "./actionType"

const initstate ={
    products:[],
    error :"",
    loading:false,
    currproduct:{},
    cart:[],
    order:[]
}

const Productreducer=(state=initstate,{type,payload})=>{


    switch(type){
        case types.FETCH_DATA_REQUEST:{
            return{
                ...state,
                error:"",
                loading:true
            }
        }
        case types.FETCH_DATA_SUCCESS:{
            console.log(payload,"cart")
            return{
                ...state,
                error:"",
                products:payload,
                loading:false
            }
        }
 
   
        case types.FETCH_DATA_FAILURE:{
            return{
                ...state,
                error:payload   ,
                loading:false
            }
        }
        case types.GET_SINGLE_PRODUCT_REQUEST:{
            return{
                ...state,
                error:"",
                loading:true
            }
        }
        case types.GET_SINGLE_PRODUCT_SUCCESS:{
            return{
                ...state,
                error:"",
                currproduct:payload,
                loading:false
            }
        }
 
   
        case types.GET_SINGLE_PRODUCT_FAILURE:{
            return{
                ...state,
                error:payload   ,
                loading:false,
                
            }
        }
        case types.ADD_PRODUCT_CART_REQUEST:{
            return{
                ...state,
                error:"",
                loading:true,
            }
        }
        case types.ADD_PRODUCT_CART_SUCCESS:{
            return{
                ...state,
                error:"",
                cart:[...state.cart,payload],
                loading:false
            }   
        }
 
   
        case types.ADD_PRODUCT_CART_FAILURE:{
            return{
                ...state,
                error:payload ,
                loading:false,
                currproduct:payload
            }
        }
        case types.FETCH_CART_REQUEST:{
            return{
                ...state,
                error:"",
                loading:true,
            }
        }
        case types.FETCH_CART_SUCCESS:{
            return{
                ...state,
                error:"",
                cart:[...payload],
                loading:false
            }   
        }
 
   
        case types.FETCH_CART_FAILURE:{
            return{
                ...state,
                error:payload ,
                loading:false,
                currproduct:payload
            }
        }
        case types.POST_ORDER_REQUEST:{
            return{
                ...state,
                error:"",
                loading:true,
            }
        }
        case types.POST_ORDER_SUCCESS:{
            return{
                ...state,
                error:"",
                order:payload,
                loading:false
            }   
        }
 
   
        case types.POST_ORDER_FAILURE:{
            return{
                ...state,
                error:payload ,
                loading:false,
                currproduct:payload
            }
        }


        case types.FETCH_ORDER_DATA_REQUEST:{
            return{
                ...state,
                error:"",
                loading:true
            }
        }
        case types.FETCH_ORDER_DATA_SUCCESS:{
            // console.log(payload,"cart")
            return{
                ...state,
                error:"",
                order:[...payload],
                loading:false
            }
        }
 
   
        case types.FETCH_ORDER_DATA_FAILURE:{
            return{
                ...state,
                error:payload   ,
                loading:false
            }
        }
       default:
           return state
    }
  
       
}


export default Productreducer


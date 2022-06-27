import axios from "axios"
import Axios  from "axios"
import * as types from "./actionType"


const fetchdatarequest=(payload)=>{
    return{
        type : types.FETCH_DATA_REQUEST,
        payload
    }
}
const fetchdatasuccess=(payload)=>{
    return{
        type : types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchdatafailure=(payload)=>{
    return{
        type : types.FETCH_DATA_FAILURE,
        payload
    }
}






const singleProductRequest=(payload)=>{
    return{
        type : types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}
const singleProductSuccess=(payload)=>{
    return{
        type : types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}
const singleProductFailure=(payload)=>{
    return{
        type : types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}






const addproductCartRequest=(payload)=>{
    return{
        type : types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}
const addproductCartsuccess=(payload)=>{
    console.log(payload,"payload")
    return{
        type : types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}
const addproductCartfailure=(payload)=>{
    return{
        type : types.ADD_PRODUCT_CART_FAILURE,
        payload
    }
}



const fetchCartRequest=(payload)=>{
    return{
        type : types.FETCH_CART_REQUEST,
        payload
    }
}
const fetchCartsuccess=(payload)=>{
    // console.log(payload,"cartpayload")
    return{
        type : types.FETCH_CART_SUCCESS,
        payload
    }
}
const fetchCartfailure=(payload)=>{
    return{
        type : types.FETCH_CART_FAILURE,
        payload
    }
}




const deleteCartRequest=(payload)=>{
    return{
        type : types.DELETE_CART_REQUEST,
        payload
    }
}
const deleteCartsuccess=(payload)=>{
    console.log(payload,"cartpayload")
    return{
        type : types.DELETE_CART_SUCCESS,
        payload
    }
}
const deleteCartfailure=(payload)=>{
    return{
        type : types.DELETE_CART_FAILURE,
        payload
    }
}





const postorderRequest=(payload)=>{
    return{
        type : types.POST_ORDER_REQUEST,
        payload
    }
}
const postordersuccess=(payload)=>{
    console.log(payload,"postpayload")
    return{
        type : types.POST_ORDER_SUCCESS,
        payload
    }
}
const postorderfailure=(payload)=>{
    return{
        type : types.POST_ORDER_FAILURE,
        payload
    }
}






const emptycartRequest=()=>{
    return{
        type : types.POST_ORDER_REQUEST,
       
    }
}
const emptycartsuccess=(payload)=>{
    // console.log(payload,"postpayload")
    return{
        type : types.POST_ORDER_SUCCESS,
        payload
    
    }
}
const emptycartfailure=(payload)=>{
    return{
        type : types.POST_ORDER_FAILURE,
        payload,
    
    }
}



const fetchorderRequest=(payload)=>{
    return{
        type : types.FETCH_ORDER_DATA_REQUEST,
        payload
    }
}
const fetchordersuccess=(payload)=>{
    console.log(payload,"orderdata")
    return{
        type : types.FETCH_ORDER_DATA_SUCCESS,
        payload
    }
}
const fetchorderfailure=(payload)=>{
    return{
        type : types.FETCH_ORDER_DATA_FAILURE,
        payload
    }
}



const getorderData=()=>dispatch=>{
    dispatch(fetchorderRequest())
    Axios.get("/orders").then((res)=>dispatch(fetchordersuccess(res.data)))
    .catch((err)=>dispatch(fetchorderfailure(err.data)))
}
















const emptyCart=(payload)=>(dispatch)=>{
    dispatch(emptycartRequest())
    let deletepayload=[]
    for(let product of payload){
        let temp = dispatch(deleteCartdata(product.id))
        deletepayload.push(temp)
    }
    Promise.all(deletepayload)
    .then((res)=>dispatch(emptycartsuccess(res.data)))
    .then((err)=>dispatch(emptycartfailure(err.data)))
}













const getData=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchdatarequest())
  
   Axios.get("/products",{
       params:{
           ...payload
       }
   }).then((r)=>dispatch(fetchdatasuccess(r.data))).catch((e)=>dispatch(fetchdatafailure(e.data)))
}
}





const getSingleProduct=(id)=>{
    return(dispatch)=>{
        dispatch(singleProductRequest())
  
   Axios.get(`/products/${id}`)
   .then((r)=>dispatch(singleProductSuccess(r.data)))
   .catch((e)=>dispatch(singleProductFailure(e.data)))
}
}

const getCartData=()=>dispatch=>{
    dispatch(fetchCartRequest())
    Axios.get("/cart").then((res)=>dispatch(fetchCartsuccess(res.data)))
    .catch((err)=>dispatch(fetchCartfailure(err.data)))
}



const  addproductCart =(product)=>(dispatch)=>{
    
    dispatch(addproductCartRequest())
    console.log(product,"pro")

   Axios.post("/cart",product)
   .then((res)=>{dispatch(addproductCartsuccess(res.data))})
   .catch((err)=>{dispatch(addproductCartfailure(err.data))})
}






const deleteCartdata=(id)=>(dispatch)=>{
    dispatch(deleteCartRequest())

    Axios.delete(`/cart/${id}`)
    .then((res)=>{dispatch(deleteCartsuccess(res.data)) ;dispatch(getCartData())})
    .catch((err)=>{dispatch(deleteCartfailure(err.data))})
}





const postorderdata=(payload)=>(dispatch)=>{
    dispatch(postorderRequest())
    console.log(payload,"order")
    const orderPayload= []
    
    for(let products of payload){
       products && orderPayload.push(Axios.post("/orders",products))
    }

     Promise.all(orderPayload)
    .then((res)=>{console.log(res,'res');dispatch(postordersuccess(res.data))})
    .then(()=>dispatch(emptyCart(payload)))
    .catch((err)=>{dispatch(postorderfailure(err.dat))})
}








export {getData,
    getSingleProduct,
    addproductCart,
    getCartData,
    deleteCartdata,
    getorderData,
    postorderdata}    
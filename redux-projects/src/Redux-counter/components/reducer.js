import { ADD_COUNT, DEVIDE, DOUBLE, REMOVE_COUNT } from "./action";



export const reducer = (store,{type,payload})=>{
    console.log(store)
    switch(type){
        case ADD_COUNT:{
            return {...store,count: store.count + payload}
        }
        case REMOVE_COUNT:{
            return{...store,count:store.count -payload}
        }
        case DOUBLE:{
            return{
                ...store,count:store.count*payload
            }
        }
        case DEVIDE:{
            return{
                ...store,count:store.count/payload
            }
        }
        default:
            return store;
    }
}

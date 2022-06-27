import React from 'react'

export const hide = React.createContext()

const initialstate={
  isAuth:false,
  token:null
}

const reducer=(state,action)=>{
   switch(action.type){
    case "Loginsuccess":{
       return{
         ...state,
         isAuth:true,
         token:action.payload
       }
     }
     case "Logoutsuccess":{
       return{
         ...state,
         isAuth:false,
         token:null
       }
     }
     default:{
       return state
     }
   }
}

export const Authprovider = ({children}) => {
  
  const [state,dispatch]= React.useReducer(reducer,initialstate)

  return (
  <hide.Provider value={[state,dispatch]}>
      {children}
      
  </hide.Provider>
  )
}


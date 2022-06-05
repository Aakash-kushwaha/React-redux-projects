import { combineReducers, legacy_createStore} from "redux"
import { reducer } from "../todocompo/Reducer"
import { Counterreducer } from "./reducer"



const rootreducer=combineReducers({
    counter:Counterreducer,
    todoreducer:reducer
})

export const store = legacy_createStore(rootreducer)
console.log(store.getState(),"store")



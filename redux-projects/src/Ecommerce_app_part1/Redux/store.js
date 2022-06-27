
import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import Productreducer from "./Products/reducer"

// console.log(Productreducer)
const rootReducer = combineReducers({
    ecommerceData:Productreducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)))

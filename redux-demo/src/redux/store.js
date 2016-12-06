import {combineReducers, createStore} from 'redux'
import usersReducer from './usersReducer'
//import productsReducer from './productsReducer' // if we had one

const initialState = {
    users: [],
    //products: []
}

const combinedReducers = combineReducers({
    users: usersReducer,
    //products: productsReducer // if we had one
})

export default createStore(combinedReducers, initialState)
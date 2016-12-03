# Store
* A store is the place to store our global state
* Just like the state of React component, treat data in the store like immutable object.
* There's only one single store in Redux.

## How to create a store:
### Step 1: Init our global state
````javascript
const initialState = {
	users: [],
	products: []
}
````

### Step 2: Combine all reducers
````javascript
import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import productsReducer from './productsReducer' // if we had one

const combinedReducers = combineReducers({
	users: usersReducer,
	products: productsReducer // if we had one
})
````
* Notice each field in initial state must has a corresponde reducer.

### Step 3: `createStore()`
````javascript
import {createStore} from 'redux'

export default store = createStore(initialState, combinedReducers)
````

Full source: 
````javascript
// src/redux/store.js
import {combineReducers, createStore} from 'redux'
import usersReducer from './usersReducer'
import productsReducer from './productsReducer' // if we had one

const initialState = {
	users: [],
	products: []
}

const combinedReducers = combineReducers({
	users: usersReducer,
	products: productsReducer // if we had one
})

export default store = createStore(initialState, combinedReducers)
````

[Next](redux5.md)






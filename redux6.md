# Middleware: redux-thunk

[Action]--><b>[Middleware]</b>-->[Reducer]-->[Store]

* Right after an action is dispatched, if we want to do something with it before action data actually dispatched into store, we write (or use) redux middleware.
* This will instruct you how to use `redux-thunk`, one of many [redux midlewares](http://redux.js.org/docs/introduction/Ecosystem.html#middleware).
* `redux-thunk` is a middleware that help us to write code to request data from server API.

## Install `redux-thunk` middleware
`npm install --save redux-thunk`

## Setup store
```javascript
//store.js
//import [...]
import thunk from 'redux-thunk'

const middlewares = [thunk]
export default createStore(todoReducer, applyMiddleware(...middlewares));

```
## Write an async action
```javascript
//action.js
export const REQUEST_DATA = "REQUEST_DATA"
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS"
export const REQUEST_DATA_FAIL = "REQUEST_DATA_FAIL"
export function requestData(){
  //our action creator returns a function instead of action object
  //because we need to do things asyncronously
  return (dispatch) => {
    //here we use 'dispatch' to, well, dispatch an action any time needed.
    dispatch({
      type: REQUEST_DATA
    })
    return fetch('http://www.example.com/data')
    .then(resp => resp.json())
    .then(json => {
      dispatch({
        type: REQUEST_DATA_SUCCESS,
        json
      })
    }, () => {
      dispatch({
        type: REQUEST_DATA_FAIL,
        error: 'Some error message'
      })
    })
  }
}
```

## Create reducer for REQUEST_DATA_SUCCESS and REQUEST_DATA_FAIL
```javascript
// someReducer.js
export default function someReducer(state = {}, action){
  switch(action.type){
    case REQUEST_DATA:
      return {
        ...state,
        status: 'requesting'
      }
    case REQUEST_DATA_SUCCESS:
      return {
      	...state,
        status: 'success',
        data: action.json
      }
    case REQUEST_DATA_FAIL:
      return {
        ...state,
        status: fail,
        error: action.error
      }
    default: return state
  }
}
```

## Use async action
```javascript
//App.js or some component that need to request data from server API
//import ...
import {requestData} from './action.js'

class App extends React.Component{
  componentDidMount(){
    //request data from server API here
    this.props.dispatch(requestData())
    // see that we actually dispatched a function here in stead of action object
    // but it would work with the help of redux-thunk.
  }
  render(){
    return <div>...</div>
  }
}
export default connect(...)(App)
```
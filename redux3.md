# Reducer
* Example of a reducer to add a user to the user list
````javascript
// src/redux/usersReducer.js
import {ADD_USER} from './actions'

export default function users(state = {} /* a bit weird but important */, action){
    switch(action.type){
        case ADD_USER:
            return [...state, action.user]
    }
    return state // must return state by default
}
````

## What is this for?
* We write `reducer` to define the way to change our global state depend on the action's type

## Notes
* Reducer signature: (state, action) => nextState
* Reducer must be a pure function, which means:
  * No input mutations (Ex: `state.push(action.user)` or `state.someProp = someValue` is forbidden)
  * No side affect (No async call, no access other resource like local storage or something)
  * Output must be predictable (Y = ⨍(X) : ∀ X → ∃! Y)
* Create many reducers for many entities in your app. Example: create `users()` reducer to handle user-related actions, create `products()` reducer to handle product-related actions.
* Next step will help you to combine all reducers and register them.

[Next](redux4.md)

[Index](README.md)
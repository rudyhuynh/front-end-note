# Action

* Example of an action to add a user into a user list:
````javascript
// src/redux/actions.js
export const ADD_USER = "ADD_USER"
export function addUser(user){
    return {
        type: ADD_USER,
        user: user
    }
}
````
* What returned by `addUser()` is an action
* `addTodo()` is called action creator, we'll call it to get an action.
* Each action must has a `type`, we'll need this `type` later, that why we `export` them.

## What is this mean?
* Action is the cause to make our state change, anytime you want to change our state, first create an action.

[Next](redux3.md)

[Index](README.md)
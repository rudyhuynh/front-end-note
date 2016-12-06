import {ADD_USER} from './actions'

export default function users(state = [] /* a bit weird but important */, action){
    switch(action.type){
        case ADD_USER:
            return [...state, action.user]
    }
    return state // must return state by default
}
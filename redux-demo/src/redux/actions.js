export const ADD_USER = "ADD_USER"
export function addUser(user){
    return {
        type: ADD_USER,
        user: user
    }
}
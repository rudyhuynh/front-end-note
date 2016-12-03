# Redux in action
Below instructs you how to use Redux in React. Redux actually can be combined with Angular (1 or 2) or any other View layer.

## Step 0: Prepare a React component:
````javascript
// src/App.js

import React from 'react'

class App extends React.Component{
    addNewUser(){
        // will add code later
    }
    render(){
        return <div>
            <button onClick={() => this.addNewUser()}>Add new user</button>
            Users: {/* will add code later */}
        </div>
    }
}

export default App

````

## Step 1: Provide the `store` to React application:
````javascript
// src/index.js

// import ...
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
````
* This will make App component or any child, any grandchild of App can be connected to Redux.

## Step 2: `connect()` a component to Redux
````javascript
// src/App.js

//import ...
import {connect} from 'react-redux'

class App extends React.Component{
    //...
}

export default connect(...)(App)

````

## Step 3: Define what to `connect()`
* What to get from the global state
````javascript
// src/App.js

//import ...

class App extends React.Component{
    //...

    render(){
        return <div>
            Users: {this.props.users.map(user => {
                return <span>{user}<br/></span>
            })}
        </div>
    }
}

const mapStateToProp = state => {
    return {
        users: state.user,
        products: state.products // if we need to
    }
}
export default connect(mapStateToProp)(App)

````
* This is to pass data in global state to the props of App component. We then get `users` or `products` by `this.props.users` or `this.props.products` inside App component.

## Step 4: Make an action action
* In Redux, this means `dispatch()` an action
````javascript
// src/App.js

//import ...
import {addUser} from './redux/actions'

class App extends React.Component{

    userId = 1

    onClickAddUser(){
        const newUser = 'user ' + (this.userId++)
        this.props.dispatch(addUser(newUser)) // 'dispatch()' method was passed to App's props by 'connect()'
    }

    render(){
        return <div>
            <button onClick={() => this.onClickAddUser()}>Add a user</button>
            <div>
                Users: {this.props.users.map(user => {
                    return <span>{user}<br/></span>
                })}
            </div>
        </div>
    }
}

//...
````

Full source:
````javascript
// src/App.js
import React from 'react';
import {connect} from 'react-redux'
import {addUser} from './redux/actions'

class App extends React.Component {
  
    userId = 1

    onClickAddUser(){
        const newUser = 'user ' + (this.userId++)
        this.props.dispatch(addUser(newUser))
    }
    
    render() {
        return <div>
            <button onClick={() => this.onClickAddUser()}>Add a user</button>
            <div>
                Users: {this.props.users.map(user => {
                    return <span>{user}<br/></span>
                })}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(App)

````

## Notes
* Before running your app with `npm start`, first install `redux` and `react-redux` by running: `npm install redux react-redux --save`

[Index](README.md)





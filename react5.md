## React State

Each React Component may (or may not) have a state. Everytime we change component's state, render() method will be called to rerender the component.

## Step 1: Prepare a component with initial state
````
// src/App.js

//[...]

class App extends React.Component{
    constructor(props){
        super(props) // call React.Component constructor
        // initial state:
        this.state = {
            userName: 'rudy.huynh'
        }
    }
    render(){
        return <div>
            User name: {this.state.userName}
            <button>Change user name to somebody</button>
        </div>
    }
}

export default App
````
Save `App.js` and see the page after refresh.

## Step 3: Let's change state.userName to somebody
````
// src/App.js
class App extends React.Component{
    constructor(props){
        super(props) // call React.Component constructor
        // initial state:
        this.state = {
            userName: 'rudy.huynh'
        }
    }
    changeUserName(){
        this.setState({
            userName: 'somebody'
        })
    }
    render(){
        return <div>
            User name: {this.state.userName}
            <button onClick={() => this.changeUserName()}>Change user name to somebody</button>
        </div>
    }
}
````
Save `App.js` then try to click to `Change user name to somebody` button.

### Notes:
* We define initial state in constructor then get state value via `this.state.someValue`
* To change state value, we use `this.setState` method
* Change state by directly set state.userName = 'someone' is not recommended and will not make React render our component.
* Treat the state object like an immutable.
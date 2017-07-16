# What is `this` in Javascript?

Below explains `this` in Javascript without strict-mode.

````javascript
function revealThis(){
    console.log(this)
}
````

* By default, `this` is the global object (in browser, global object is `window`).
````javascript
revealThis() // will log 'window' object if run on browser
````

* If the function was called as a method of an object, `this` is that object.
````javascript
let x = {name: "x"}
x.revealThis = revealThis

x.revealThis() // will log 'Object {name: "x"}'
````

* We can explicitly assign 'this' to something by using `Function.bind` method.
````javascript
let y = {name: "y"}
let thisIsY = revealThis.bind(y)

thisIsY() // will log 'Object {name: "y"}'
````

## In React
````javascript
// Click on 'Click Me' button below won't work:
class App extends React.Component{
    onClick(){
        this.setState({user: 'somebody'}) // Will cause error about 'setState' is not a function...
    }
    render(){
        return <button onClick={this.onClick}>Click Me</button>
    }
}

// How to fix:
class App extends React.Component{
    onClick(){
        this.setState({user: 'somebody'})
    }
    render(){
        return <button onClick={() => this.onClick()}>Click Me</button> // Take advantage of ES6 '() => {...}'
    }
}

// Could also fixed by below
class App extends React.Component{
    constructor(props){
        super(props)
    }
    onClick = () => {
        this.setState({user: 'somebody'})
    }
    render(){
        return <button onClick={this.onClick}>Click Me</button>
    }
}
````

[Index](README.md)





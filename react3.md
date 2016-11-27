# Create a React component

![react1-react-component-hierachy](https://github.com/rudyhuynh/front-end-note/blob/master/react1-react-component-hierachy.png "React Component Hierachy")

There are 3 ways to create a React component:
## 1. Create a class (Recomended way, see `my-app/src/App.js`)
````
class App extends React.Component{
    render(){
        return <div className="App">
            ...some HTML like syntax here...
        </div>
    }
}
````

Note: 
* `className` is like `class` in HTML, but `class` is a reserved word in Javascript, so it is `className`.
* `HTML like syntax`, I mean JSX (that's what it's called).

## 2. React.createClass
The code in (1.) is equivelent to the below if you don't use [Javascript ES6](es6.md):
````
const App = React.createClass({
    render: function(){
        return <div>
            ...some HTML like syntax here...
        </div>
    }
})
````

## 3. Create a function (Also recommended, for shorten purpose...)
The code in (2.) is equivelent to the below :
````
var App = () => {
    return <div>
        ...some HTML like syntax here...
    </div>
}
````

## Add a component to another component as a child
For example, we have a NavigationBar component like below:
````
var NavigationBar = () => {
    return <div>
        <button>Button 1</button>
        <button>Button 2</button>
    </div>
}
````
we can add NavigationBar into App like below
const App = () => {
    return <div>
        <NavigationBar/>
    </div>
}

Let's try it in your `my-app/src/App.js`. Below is full source code:
````
// src/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const NavigationBar = () => {
  return <div>
    <button>Button 1</button>
    <button>Button 2</button>
  </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

````

App and NavigationBar are like parent and child.
In next step we will see how to pass data from parent to child.

[Next](react4.md)











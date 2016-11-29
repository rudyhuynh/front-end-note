# ES6+ Common syntax
Below are common syntax of Javascript ES6+, which are usually used in React and Redux project

* `const` and `let`: `const` and `let` make the variable limited in between a code block `{...}`. Use them instead of var, every `var` should replaced by `let`, if constant then should use `const`
````javascript
const ONE = 1

let x = 1

for (let item of anArray){ 
    //... 
}

switch (type){
    case 1:{
        const y = 1
        //...
        break
    }
    case 2: {
        let y = 2
        //...
        break
    }
}
````

* `() => { ... }`: Like lambda expression, to quickly define a function without create new scope.
````javascript
// In ES5:
function outerFunction(){
    
    var this = _this // to get the context of outerFunction inside innerFunction

    function innerFunction(){
        _this.someMethod()
    }
}

// In ES6:
function outerFunction(){
    
    const innerFunction = () => {
        this.someMethod() // 'this' is the context of outerFunction
    }

}
````

* `import/export`: 
````javascript
// File1.js
export const HOST = 'www.example.com'
export const PORT = 3000 
````
````javascript
// File2.js
import {HOST, PORT} from './File1.js'

console.log(HOST) // 'www.example.com'
console.log(PORT) // 3000
````

````javascript
// File1.js
const singleton = {x: 1, y: 2}
export default singleton
````
````javascript
// File2.js
import singleton from './File1.js'

console.log(singleton) // {x: 1, y: 2}
````

* Destructuring: To quickly get object properties or array items
````javascript
// In ES5:
var obj = {x: 1, y: 2}
var x = obj.x
var y = obj.y

console.log(x) // 1
console.log(y) // 2

// In ES6:
let obj = {x: 1, y: 2}
let {x, y} = obj

console.log(x) // 1
console.log(y) // 2

// Array
let array = [1, 2]
let [x, y] = array

console.log(x) // 1
console.log(y) // 2

// Quickly get properties in function's parameters
function someFunction({x, y}){
    console.log(x, y)
}

someFunction({x: 1, y: 2}) // 1, 2
````

* `class`: To create Class
````javascript
class App extends React.Component{

    static propTypes = {}; // define static property, supported by create-react-app, not part of ES6
    
    state = { someStateValue: 1 } // define object property, supported by create-react-app, not part of ES6
    
    constructor(props){
        super(props) // call parent's constructor

        this.someValue = 1
    }

    method1(){
        
    }

    method2(){

    }

    render(){
        const {someStateValue} = this.state
        //...
    }
}
````

* Spread Operator: To quickly merge one or many array into a new array
````javascript
// In ES5:
var array1 = [1, 2, 3]
var array2 = array1.concat([4, 5])

console.log(array2) // [1,2,3, 4, 5]

// In ES6: 
let array1 = [1, 2, 3]
var array2 = [...array1, 4, 5]

console.log(array2) // [1, 2, 3, 4, 5]

// Could also merge properties of object into a new object (supported by create-react-app, not part of ES6):
let object1 = {x: 1, y: 2}
let object2 = {...object1, z: 3}

console.log(object2) // {x: 1, y: 2, z: 3}
````






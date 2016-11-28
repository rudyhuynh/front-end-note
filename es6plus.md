# ES6+ Common syntax
Below are common syntax of Javascript ES6+, which are usually used in React and Redux project

* `const` and `let`: `const` and `let` make the variable limited in between a code block `{...}`. Use them instead of var, every `var` should replaced by `let`, if constant then should use `const`
````
const ONE = 1

let x = 1

for (let i in someArray){ ... }

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
````
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
````
// File1.js
export const HOST = 'www.example.com'
export const PORT = 3000
````
````
// File2.js
import {HOST, PORT} from './File1.js'

console.log(HOST) // 'www.example.com'
console.log(PORT) // 3000
````

````
// File1.js
const singleton = {x: 1, y: 2}
````
````
// File2.js
import singleton from './File1.js'

console.log(singleton) // {x: 1, y: 2}
````

* Destructor: To quickly get object properties or array items
````
// In ES5:
var obj = {x: 1, y: 2}
var x = obj.x
var y = obj.y

console.log(x) // 1

// In ES6:
let obj = {x: 1, y: 2}
let {x, y} = obj

console.log(x) // 1
console.log(y) // 2
````

* `class`: To create Class
````
class App extends React.Component{

    static propTypes = {}; // define static property, supported by create-react-app, not part of ES6
    
    state = { someStateValue: 1 } // define object property, supported by create-react-app, not part of ES6
    
    constructor(props){
        super(props)

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

* Spread Operator: To quickly merge an array into a new array
````
// In ES5:
var array1 = [1, 2, 3]
var array2 = array1.concat([4, 5])

console.log(array2) // [1,2,3, 4, 5]

// In ES6: 
const array1 = [1, 2, 3]
var array2 = [...array1, 4, 5]

console.log(array2) // [1, 2, 3, 4, 5]

// Could also merge properties of object into a new object (supported by create-react-app, not part of ES6):
const object1 = {x: 1, y: 2}
const object2 = {...object1, z: 3}

console.log(object2) // {x: 1, y: 2, z: 3}
````






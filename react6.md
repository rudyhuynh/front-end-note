# React Component Life Cycle

## If you defined below methods to a component, their will be call in order (you may forget if you don't need):

1. `constructor(props)`
2. `componentWillMount()`
3. `componentWillReceiveProps(nextProps)`
4. `shouldComponentUpdate(nextProps, nextState)`
5. `componentWillUpdate()`
6. `render()`
7. `componentDidUpdate()`
8. `componentDidMount()`
9. `componentWillUnmount()`

### Notes:
* If you want to define the above methods, you have to use `class` to define a component.
* Not all of them will be called everytime.
* [See React doc for more details](https://facebook.github.io/react/docs/react-component.html) or maybe keep reading below.

## You will usually use:
* `render()` (always) which returns JSX
* `constructor(props)` to define initial state of the component
* `componentDidMount()` to call fetch data API for your component

## Examples:
````javascript
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: ''
        }
    }
    componentDidMount(){
		fetch('http://my.api.com/users').then((data) => {
			this.setState({
				userName: data.userName
			})
		})
	}
    render(){
        return <div>
            User name: {this.state.userName}
        </div>
    }
}
````

## Simplest life cycle
* First the component will be initiated (`constructor()` runs).
* Then it will be rendered (`render()` runs).
* After it was added to the DOM, `componentDidMount()` will run only once.
* Everytime component receives new `prop` or `state` change, the component will be re-rendered (`render()` runs again) then it will be updated (if nessessary) to the DOM.

[Index](README.md)
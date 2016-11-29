# React Component Life Cycle

## If you defined below methods to a component, their will be call in order (you may forget if you don't need):

* `constructor(props)`
* `componentWillMount()`
* `componentWillReceiveProps(nextProps)`
* `shouldComponentUpdate(nextProps, nextState)`
* `componentWillUpdate()`
* `render()`
* `componentDidUpdate()`
* `componentDidMount()`
* `componentWillUnmount()`

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
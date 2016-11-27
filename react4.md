# React Props

* As said, using React, our UI will be rendered by a bunch of components. React props is the way to pass data from parent components to child component.

![react1-react-component-hierachy](https://github.com/rudyhuynh/front-end-note/blob/master/react1-react-component-hierachy.png "React Component Hierachy")

## Pass data to child's `props` from parent
Let see we have App component, we want to pass `userName` value to NavigationBar component
````
const App = () => {
	let userName = 'rudy.huynh'
    return <div>
        <NavigationBar userName={userName}/>
    </div>
}
````

## Take `props` data in chid
In NavigationBar component, we can take the value of userName like below:
````
var NavigationBar = (props) => {
    return <div>
    	User name: {props.userName}
        <button>Button 1</button>
        <button>Button 2</button>
    </div>
}
````
Or if NavigationBar is defined by using class
````
class Navigation extends React.Component{
	render(){
		return <div>
			User name: {this.props.userName}
	        <button>Button 1</button>
	        <button>Button 2</button>
		</div>
	}
}
````

## Notes

* Data are recommended to pass from parent to its direct children only.
* Parent can call method from child to get child data but **it is not recommended** ([see more here](https://facebook.github.io/react/docs/refs-and-the-dom.html)).
* Parent can pass data to children of children or any grandchildren but **it is not recommended** ([see more here](https://facebook.github.io/react/docs/context.html))
* In JSX, everything in between of {} is Javascript.
* To comment an element: {/* <SomeElement/> */}
* Yes, we define a NavigationBar component to create a <NavigationBar/> element


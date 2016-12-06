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
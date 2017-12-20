import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import AddUserForm from './AddUserForm'


class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/users')
    .then(response => response.json())
    .then(users => this.setState({
      users
    }))
  }

  addUser = (user) => {
    this.setState({
      user: this.state.users.concat(user)
    }, () => {
      this.props.history.replace('/users')
    })
  }

  handleClick = (userId) => {
    const request = {
      method: 'DELETE'
    }
    fetch(`/users/${userId}`, request)
      .then(response => {
        if (response.ok) {
          const index = this.state.users.findIndex(user => user.id === userId)
          this.setState({
            users: [
              ...this.state.users.slice(0, index),
              ...this.state.users.slice(index + 1)
            ]
          })
        } else {
          window.alert("unable to delete video")
        }
      })

  }

  render() {
    const { match } = this.props
    const renderUserProfile = this.state.users.map(user => (

      <div className={`user_${user.id}_profile`} key={user.id}>
        <h3> Name: {user.name} </h3>
        <button className={`delete_user_${user.id}_button`} onClick={()=>this.handleClick(user.id)}> Delete My Account </button>
      </div>
    ))
  return (
    <div>
      <Route path={`${match.url}/new`} render={() => <AddUserForm addUser={this.addUser} />}/>
      <Route exact path={match.url} render={() => (
        <div>
          <Link to={`${match.url}/new`}>Add New User</Link>
          <h2 className="header"> Index page - List Users </h2>
          {renderUserProfile}
        </div>
      )} />
    </div>
  )
 }
}

export default Users

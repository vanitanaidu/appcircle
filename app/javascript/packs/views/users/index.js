import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import AddUserForm from './AddUserForm'
import Users from './UserDetails'

class Users extends Component {

  constructor(props) {
    super(props)
debugger
    this.state = {
      users: [],
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
       users: this.state.users.concat(user)  // or you could also do `users: [this.state.users, ...user],`
    }, () => {
      this.props.history.replace(`/users/${user.id}`)
    })
  }

  handleClick = (userId) => {
    const request = {
      method: 'DELETE'
    }
    fetch(`/users/${userId}`, response)
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

    const { match } = this.props  // this is equivalent to writing.... const match = this.props
    // const userId = this.state.users.map(user => (user.id))
    const renderUserProfile = this.state.users.map(user => (

      <div className={`user_${user.id}_profile`} key={user.id}>
        <h3> Name: {user.name} </h3>
        <button className={`delete_user_${user.id}_button`} onClick={()=>this.handleClick(user.id)}> Delete My Account </button>
      </div>
    ))
  return (
    <div>
      <Route path={`${match.url}/new`} render={() =>  <AddUserForm addUser={this.addUser.bind(this)} />} />
      <Route exact path={match.url} render={() => (
        <div>
          <Link to={`${match.url}/new`}>Add New User</Link>
          <h2 className="header"> Index page - List Users </h2>
          {renderUserProfile}
        </div>
      )} />
      <UserDetails users={this.state.users}
    </div>
  )
 }
}

export default Users
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.

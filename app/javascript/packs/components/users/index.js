import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '.../actions'; // when u don't specify a file inside a folder and just call the folder name, it means you are calling the index.js file
import { Link, Route } from 'react-router-dom';
import AddUserForm from './AddUserForm';
import UserDetails from './UserDetails';

class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }
  }

// delete this part later if you don't need it
  render() {
    return (
      <div>
      Users
      </div>
    )
  }

  //until her


//
//   just uncomment later and your app will work
//
//   componentDidMount() {
//       fetch('/users')
//     .then(response => response.json())
//     .then(users => this.setState({
//       users
//     }))
//   }
//
//   addUser = (user) => {
//     this.setState({
//        users: this.state.users.concat(user)  // or you could also do `users: [this.state.users, ...user],`
//     }, () => {
//
//       this.props.history.replace(`/users/${user.name}`)// this might need to change
//     })
//   }
//
//   render() {
//
//     const { match } = this.props  // this is equivalent to writing.... const match = this.props.match
//
//     const user = this.state.users.map(user => (user)) //* WORK ON THIS ...this gives me back an array
//
//     const renderUserProfile = this.state.users.map((user, index) => {
//
//       return (
//         <div className={`user_${user.id}_profile`} key={index}>
//           <h3> Name: {user.language} </h3>
//
//         </div>
//       )
//     })
//   return (
//
//     <div>
//       <Route path={`/${match.url}/${user.name}`} render={() =>  <UserDetails userDetails={this.state.users} />} />
//
//       <Route path={`${match.url}/new`} render={() =>  <AddUserForm addUser={this.addUser} />} />
//
//       <Route exact path={match.url} render={() => (
//         <div>
//           <Link to={`${match.url}/new`}>Add New User</Link>
//           <h2 className="header"> Index page - List Users </h2>
//           {renderUserProfile}
//         </div>
//       )} />
//
//     </div>
//   )
//  }
// }



// all the way this here








export default Users
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import _ from 'lodash';

import { fetchUsers } from '../../actions'; // when u don't specify a file inside a folder and just call the folder name, it means you are calling the index.js file
import AddUserForm from './AddUserForm';



class Users extends Component {

  componentDidMount = () => {
    this.props.fetchUsers()
  }

  renderUsers = () => {
    return _.map(this.props.users, user => {
      return (
        <a key={user.id} >
          <Link className="list-group-item disabled" to= {"users/" + user.id}>
            <div> {user.name} </div>
            <div> About me: {user.about_me} </div>
            <div> Interests: {user.interests} </div>
            <div> State/City: {user.state} - {user.city}</div>
            <br/>
          </Link>
        </a>


      )
    })
  }

  render() {

    return (
      <div>
        <div className="jumbotron" >
          <div className="container">
            <h1> Circle </h1>
          </div>
        </div>
          <div className="container">
            {this.renderUsers()}
          </div>

      </div>
    )

  }
}

function mapStateToProps(state, ownProps) {
  return { users: state.users.users }
}


 export default connect(mapStateToProps, { fetchUsers }) (Users);
//{ fetchUsers } is basically es6 for { fetchUsers: fetchUsers } and writing it either way is short cut for having to write out the function mapDispatchToProps.
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.






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




// all the way this here

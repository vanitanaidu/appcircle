import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import _ from 'lodash';

import { fetchUsers } from '../../actions'; // when u don't specify a file inside a folder and just call the folder name, it means you are calling the index.js file
import AddUserForm from './AddUserForm';
import UserCard from './UserCard';

class Users extends Component {

  componentDidMount = () => {
    this.props.fetchUsers()
  }

  renderUsers = () => {
    return _.map(this.props.users, (user) => {
      return (
        <div key={user.id} className="thumbnail box">
          <UserCard user={user}/>
        </div>
      )
  })
}


  render() {

    const renderUsers = this.props.loading ? "loading..." : this.renderUsers()
    return (
      <div>
        <div className="jumbotron"  id="title" >
          <div className="container">
            <h1> Meet . New . Friends </h1>
          </div>
        </div>

        <div className="container wrapper" >
          {renderUsers}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users.users, loading: state.users.loading }
}

 export default connect(mapStateToProps, { fetchUsers }) (Users);
//{ fetchUsers } is basically es6 for { fetchUsers: fetchUsers } and writing it either way is short cut for having to write out the function mapDispatchToProps.
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.



// Instructions from Cernan:
//  *done  1. Get the Like feature working so that each individual card updates when clicked on - NO PERSISTENCE
//
// *done 2. Get the Like feature working WITH PERSISTENCE - remove local state - separate branch (edited)
// 3. Write a blog post on the fetch API - use the example of the console.logs in your post
// 4. Study on js array methods like filter and sort
// meetme.so/reactlearnassessment  (Schedule another appointment here)

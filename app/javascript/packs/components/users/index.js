import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import _ from 'lodash';

import { fetchUsers } from '../../actions'; // when u don't specify a file inside a folder and just call the folder name, it means you are calling the index.js file
import AddUserForm from './AddUserForm';

class Users extends Component {

  componentDidMount = () => {
    debugger
    console.log("I am now in the user index page. component did mount. this.props is =", this.props)
    this.props.fetchUsers()
  }

  renderUsers = () => {
    console.log("I am now in the user index page renderusers..this.props.users is =", this.props.users)
    return _.map(this.props.users, user => {
      return (
        <div className="row" key={user.id}>
          <div className="col-md-4">
              <Link className="list-group-item disabled" to= {"users/" + user.id} >
                  <h5> {user.name} </h5>
                  <h6> About me: <small> {user.about_me} </small> </h6>
                  <h6> Interests: <small> {user.interests} </small> </h6>
                  <h6> State/City: <small> {user.state} - {user.city} </small> </h6>
              </Link>

          </div>
        </div>
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

function mapStateToProps(state) {
    console.log("I am now in the user index page. mapstatetoProps.. state is =", state.users.users)
  return { users: state.users.users }
}

 export default connect(mapStateToProps, { fetchUsers }) (Users);
//{ fetchUsers } is basically es6 for { fetchUsers: fetchUsers } and writing it either way is short cut for having to write out the function mapDispatchToProps.
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.

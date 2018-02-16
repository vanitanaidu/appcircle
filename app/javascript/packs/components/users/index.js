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
        <div key={user.id} className="box">
            <Link to= {"users/" + user.id} >
                <h5> {user.name} </h5>
                <h6> About me: <small> {user.about_me} </small> </h6>
                <h6> Interests: <small> {user.interests} </small> </h6>
                <h6> State/City: <small> {user.state} - {user.city} </small> </h6>
                <br></br>
            </Link>
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

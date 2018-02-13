import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Route } from 'react-router-dom';
// import _ from 'lodash';
import { fetchPics } from '../../actions/pictures/profile_pics';

class ProfilePics extends Component {

  componentDidMount = () => {
    const id = this.props.userId
   this.props.fetchPictures(id)
  }

  renderPictures = () => {

    return _.map(this.props.pictures, picture => {
      return (

        <li key={picture.id} >
            <div> {picture.content} </div>
            <br/>
        </li>

      )
    })
  }

  render() {

    return (
      <div>
        <h2> Pictures </h2>
        <ul>
          {this.renderPictures()}
          </ul>
      </div>
    )

  }
}
//
function mapStateToProps(state) {
 return { pictures: state.pictures.pictures }
}
//
//
export default connect(mapStateToProps, { fetchPictures }) (ProfilePics);
//{ fetchUsers } is basically es6 for { fetchUsers: fetchUsers } and writing it either way is short cut for having to write out the function mapDispatchToProps.
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.

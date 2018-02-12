import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Route } from 'react-router-dom';
// import _ from 'lodash';
import { fetchComments } from '../../actions/comments/index';

class Comments extends Component {

  componentDidMount = () => {
    const id = this.props.userId
   this.props.fetchComments(id)
  }
  
  renderComments = () => {

    return _.map(this.props.comments, comment => {
      return (

        <li key={comment.id} >
            <div> {comment.content} </div>
            <br/>
        </li>

      )
    })
  }

  render() {

    return (
      <div>
        <h2> Comments </h2>
        <ul>
          {this.renderComments()}
          </ul>
      </div>
    )

  }
}
//
function mapStateToProps(state) {
 return { comments: state.comments.comments }
}
//
//
export default connect(mapStateToProps, { fetchComments }) (Comments);
//{ fetchUsers } is basically es6 for { fetchUsers: fetchUsers } and writing it either way is short cut for having to write out the function mapDispatchToProps.
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.

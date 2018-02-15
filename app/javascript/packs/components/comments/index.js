import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import { Link, Route } from 'react-router-dom';

import { fetchComments } from '../../actions/comments';

import DeleteComment from '../comments/DeleteComment'

class Comments extends Component {

  componentDidMount = () => {
    const id = this.props.userId
   this.props.fetchComments(id)
  }

  renderComments = () => {
    return _.map(this.props.comments, comment => {
      return (
        <li className="list-group-item disabled" key={comment.id} >
          <div> {comment.content} </div>
          <DeleteComment userId={this.props.userId} id={comment.id} history={this.props.history} />
          <br/>
        </li>
      )
    })
  }

  render() {
      const renderComments = this.props.loading ? "loading..." : this.renderComments()
    return (
      <div className="container">
        <h2> Comments </h2>
        <br/>
        <ul>
          {renderComments}
        </ul>
      </div>
    )

  }
}
//
function mapStateToProps(state) {
 return { comments: state.comments.comments, loading: state.comments.loading }
}
//
//
export default connect(mapStateToProps, { fetchComments }) (Comments);
//{ fetchUsers } is basically es6 for { fetchUsers: fetchUsers } and writing it either way is short cut for having to write out the function mapDispatchToProps.
// this page is your index page that renders all the users.
//so basically when a user clicks on the link 'users', he/she gets directed to this page.

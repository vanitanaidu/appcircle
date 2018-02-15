import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../../actions/comments/delete_comment_action';

class DeleteComment extends Component {

  onDeleteClick = () => {
    const { id } = this.props
    const { userId } = this.props
    this.props.deleteComment(id, userId)
    alert("This comment will be deleted");
    this.props.history.push("/users/" + userId)
  }

  render() {
    return (
      <div>
      <button type="button" className="btn btn-small" onClick={this.onDeleteClick.bind(this)}>
        <i className="fa fa-trash-o"></i>
      </button>
      </div>
    )
  }

}
export default connect(null, { deleteComment }) (DeleteComment);

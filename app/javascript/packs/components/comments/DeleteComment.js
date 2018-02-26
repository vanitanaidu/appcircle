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
      <button type="button" className="btn btn-small float-right" onClick={this.onDeleteClick.bind(this)}>
        Delete
      </button>
      </div>
    )
  }

}

function mapStateToProps( state, ownProps) {

return state
}

export default connect(mapStateToProps, { deleteComment }) (DeleteComment);

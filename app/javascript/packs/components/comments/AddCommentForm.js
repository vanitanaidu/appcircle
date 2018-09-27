import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addComment } from '../../actions/comments/add_comment_action'


class AddCommentForm extends Component {

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (event) => {
    const id = this.props.userId
    event.preventDefault()
    this.props.addComment(this.state, id)
    event.target.reset()
    this.props.history.push(`/users/${id}`)
  }

  render() {

    return (
        <form className="form-group" onSubmit={this.handleOnSubmit}>
            <textarea
              className="form-control"
              rows="5"
              name="content"
              placeholder="Add a Comment..."
              onChange={(event) => this.handleOnChange(event)}
              />

            <button className="upload-comment-button" type="submit"> Upload Comment </button>


        </form>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addComment: addComment}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddCommentForm);

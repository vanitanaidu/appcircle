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
    this.props.history.push(`/users/${id}`)

  }

  render() {

    return (
        <form className="form-group" onSubmit={this.handleOnSubmit}>
          <div>
              <textarea
                className="form-control"
                rows="5"
                name="content"
                placeholder="Add a Comment..."
                onChange={(event) => this.handleOnChange(event)}
                />
          </div>
            <button className="upload-comment-button" type="submit"> Upload my Comment </button>
        </form>

      )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addComment: addComment}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddCommentForm);



// have an action for the form. The action is gonna be in charge of adding users to the redux state.
// After that, we send our action to the reducer.Then we will use mapStateToProps and mapDispatchToProps
// to access the results from the reducer

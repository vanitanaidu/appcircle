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

      this.props.addnewComment(this.state, id)
      this.props.history.push(`/users/${id}`)
  }

  render() {

    return (
      <div>
        <h3 className="header"></h3>
        <form className="comment_form" onSubmit={this.handleOnSubmit}>
          <div>
            <div>
              <label htmlFor="add_comment"> Add a Comment </label>
            </div>
              <textarea
                name="content"
                onChange={(event) => this.handleOnChange(event)} />
          </div>
            <button type="submit"> Upload my Comment </button>
        </form>
      </div>
      )
    }
}

function mapStateToProps(state) {
  return { comments: state.comments.comments } // the last user in state.
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addComment: addComment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);



// have an action for the form. The action is gonna be in charge of adding users to the redux state.
// After that, we send our action to the reducer.Then we will use mapStateToProps and mapDispatchToProps
// to access the results from the reducer

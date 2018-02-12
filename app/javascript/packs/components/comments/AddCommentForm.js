import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addComment } from '../../actions/add_comment_action'


class AddCommentForm extends Component {

  handleOnChange = (event) => {
    // const { name, value } = event.target 
    // this.setState({
    //     [name]: value,
    // })
  }

  // handleOnSubmit = (event) => {
  //   event.preventDefault()
  //     this.props.addUser(this.state)
  //     this.props.history.push('/')
  // }

  render() {

    return (
      <div>
        <h3 className="header"> Add a Comment </h3>
        <form className="comment_form" onSubmit={this.handleOnSubmit}>
          <div>
            <div>
              <label htmlFor="add_comment"> Add a Comment </label>
            </div>
              <textarea
                name="comment"
                onChange={(event) => this.handleOnChange(event)} />
          </div>
        </form>
      </div>
      )
    }
}

// function mapStateToProps(state) {
//   return { addUser: state.users.users } // the last user in state.
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addUser: addUser}, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);



// have an action for the form. The action is gonna be in charge of adding users to the redux state.
// After that, we send our action to the reducer.Then we will use mapStateToProps and mapDispatchToProps
// to access the results from the reducer

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateUser } from '../../actions/update_user_action';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   likes: 0
    // }

}
  // Like feature WITHOUT PERSISTENCE
  //
  // buttonClick = () => {

  //   this.setState({
  //     likes: this.state.likes + 1
  //   })
  // }



  // Like feature WITH PERSISTENCE
  buttonClick = () => {
    //react-redux way of doing it
    const user = {
      id: this.props.user.id,
      likes: this.props.user.likes + 1
    }
    this.props.updateUser(user)


    //react way of doing it
    // const id = this.props.user.id
    // const user = {
    //   id: id,
    //   likes: this.state.likes + 1
    // }
    //   fetch(`/api/users/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //       body: JSON.stringify({ user: user })
    //   })
    //     .then(response => response.json())
    //     .then(user => { this.setState({
    //         likes: user.likes
    //       }) })
    // };
  }

  render() {

    return (
      <div>
        <button onClick={this.buttonClick}>  Likes {this.props.user.likes} </button>
      </div>
    )
  }

}

function mapStateToProps(state) {
   return {users: state.users }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateUser: updateUser}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser } from '../../actions/delete_user_action';


class DeleteUser extends Component {

    onDeleteClick = () => {
      this.props.deleteUser(this.props.userId);
      alert("This user will be deleted")
      this.props.history.push("/");
    }

  render() {
    return (
      <div >
      <button onClick={this.onDeleteClick.bind(this)}>
         Delete User
      </button>
     </div>
    )
  }
}

export default connect(null, { deleteUser }) (DeleteUser);

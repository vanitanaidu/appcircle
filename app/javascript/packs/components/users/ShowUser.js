import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/fetch_user_action';

import EditUser from './EditUser';


class ShowUser extends Component {

  componentDidMount = () => {
    const { id } = this.props.match.params //same as writing const id = this.props.match.params.id
    this.props.fetchUser(id)
  }


   render() {
       return (
       <div>
        <EditUser user={this.props.user} userId={this.props.match.params.id} history={this.props.history} />
       </div>
     )
   }
}
                      // {users} same as users = state.users
function mapStateToProps({ users }, ownProps) {
  return { user: users.users[ownProps.match.params.id], loading: users.loading }
}

export default connect(mapStateToProps, { fetchUser })(ShowUser);


//what if a user went straight to the showpage like through a bookmark or a link and does not pass through the index page

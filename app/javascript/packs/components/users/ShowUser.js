import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/show_user_action';

class ShowUser extends Component {

  componentDidMount = () => {
    const { id } = this.props.match.params //same as writing const id = this.props.match.params.id
    this.props.fetchUser(id)
  }
   render() {
     if(!this.props.user){
       return <div> Please wait..... </div>
     }
     return (
       <div>
         <h1> Show User </h1>
         <h2> {this.props.user}</h2>
       </div>
     )
   }

}
                      // {users} same as users = state.users
function mapStateToProps({users}, ownProps) {
  debugger
  const singleUser = users.users
  return { user: singleUser[ownProps.match.params.id] }

}

// function mapStateToProps(state) {
//
//   return { user: state.users }
// }

export default connect(mapStateToProps, { fetchUser })(ShowUser);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchUser } from '../../actions/show_user_action';
import { deleteUser } from '../../actions/delete_user_action';

class ShowUser extends Component {

  // static contextTypes = {
  //   router: PropTypes.object
  // }

  componentDidMount = () => {
    const { id } = this.props.match.params //same as writing const id = this.props.match.params.id
    this.props.fetchUser(id)

  }

  onDeleteClick = () => {
      const { id } = this.props.match.params
      this.props.deleteUser(id)
      // .then(() => {
      //   this.context.router.push('/')
      // })
  }

renderUser = () => {
  const props = this.props
  const index =  _.findIndex(this.props.users, function(user) {
    return user.id == props.match.params.id
  })
  const user = this.props.users[index]
    return (

      <div key={user.id}>
        <h2> {user.name} </h2>
        <h3>Age: {user.age}</h3>
        <h3>Interests: {user.interests}</h3>
        <h3>About Me: {user.about_me}</h3>
        <h3>Past Jobs: {user.past_jobs}</h3>
        <h3>Fav Food: {user.fav_food} </h3>
        <h3>Fav Movies: {user.fav_movies}</h3>
        <h3>State: {user.state}</h3>
        <h3>City: {user.city}</h3>
        <h3>Languages: {user.languages}</h3>
        <h3>Schools I went to: {user.schools}</h3>
    </div>
     )

}

   render() {
    //  this.props.users.map(user => {
    //    if(!user){
    //     return <div> Loading..... </div>
    //    }
    //  }

       return (
       <div>
        {this.renderUser()}

         <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete User
        </button>

       </div>
     )
   }

}
                      // {users} same as users = state.users
function mapStateToProps({users}, ownProps) {

  return { users: users.users }

}


export default connect(mapStateToProps, { fetchUser, deleteUser })(ShowUser);


//what if a user went straight to the showpage like through a bookmark or a link and does not pass through the index page

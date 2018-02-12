//showpage
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';
//
// import { fetchUser } from '../../actions/show_user_action';
// import { deleteUser } from '../../actions/delete_user_action';
// import { editUser } from '../../actions/edit_user_action';
//
// class ShowUser extends Component {
//
//   componentDidMount = () => {
//     const { id } = this.props.match.params //same as writing const id = this.props.match.params.id
//     this.props.fetchUser(id)
//
//   }
//
// //To delete a single user. This method calls on the deleteUser action under the actions folder
//   onDeleteClick = () => {
//     const { id } = this.props.match.params
//     this.props.deleteUser(id)
//     alert("This user will be deleted");
//     this.props.history.push("/")
//   }
//
//   onEditClick = () => {
//
//     const { id } = this.props.match.params
//     this.props.editUser(id)
//     this.props.history.push("/users/new")
//   }
//
//
//   renderUser = () => {
//     const props = this.props
//     const index =  _.findIndex(this.props.users, function(user) {
//       return user.id == props.match.params.id
//     })
//     const user = this.props.users[index]
//
//       return (
//         <div key={user.id}>
//           <h2> {user.name} </h2>
//           <h3>Age: {user.age}</h3>
//           <h3>Interests: {user.interests}</h3>
//           <h3>About Me: {user.about_me}</h3>
//           <h3>Past Jobs: {user.past_jobs}</h3>
//           <h3>Fav Food: {user.fav_food} </h3>
//           <h3>Fav Movies: {user.fav_movies}</h3>
//           <h3>State: {user.state}</h3>
//           <h3>City: {user.city}</h3>
//           <h3>Languages: {user.languages}</h3>
//           <h3>Schools I went to: {user.schools}</h3>
//         </div>
//       )
//     }
//
//    render() {
//     //  this.props.users.map(user => {
//     //    if(!user){
//     //     return <div> Loading..... </div>
//     //    }
//     //  }
//
//        return (
//        <div>
//         {this.renderUser()}
//          <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
//             Delete User
//          </button>
//          <button className="btn btn-danger pull-xs-right" onClick={this.onEditClick.bind(this)}>
//             Edit User
//          </button>
//        </div>
//      )
//    }
//
// }
//                       // {users} same as users = state.users
// function mapStateToProps({users}, ownProps) {
//   return { users: users.users }
// }
//
// export default connect(mapStateToProps, { fetchUser, deleteUser, editUser })(ShowUser);
//
//
// //what if a user went straight to the showpage like through a bookmark or a link and does not pass through the index page



// AddUserForm page
// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
//
// import { addUser } from '../../actions/add_user_action'
//
//
// class AddUserForm extends Component {
//
//   handleOnChange = (event) => {
//     const { name, value } = event.target //the above line of code is the same as:
//     this.setState({                       // const name = event.target.name
//         [name]: value,                    // const value = event.target.value
//     })
//   }
//
//   handleOnSubmit = (event) => {
//     event.preventDefault()
//       this.props.addUser(this.state)
//       this.props.history.push('/')
//   }
//
//   render() {
//
//     return (
//       <div>
//         <h3 className="header"> Add New User </h3>
//         <form className="new_form" onSubmit={this.handleOnSubmit}>
//
//           <div>
//             <div>
//               <label htmlFor="name"> Name </label>
//             </div>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//             /* if you want to call `onChange={this.handleOnChange}``, you have bind it to `this` at the top. Else the syntax would be .. onChange={(event) => this.handleOnChange(event)} */
//
//           <div>
//             <div>
//               <label htmlFor="about_me"> About Me </label>
//             </div>
//               <textarea
//                 name="about_me"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="age"> Age </label>
//             </div>
//               <textarea
//                 name="age"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="past_jobs"> Past Jobs </label>
//             </div>
//               <textarea
//                 name="past_jobs"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="interests"> Interests </label>
//             </div>
//               <textarea
//                 name="interests"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="schools"> Schools </label>
//             </div>
//               <textarea
//                 name="schools"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="languages"> Languages </label>
//             </div>
//               <textarea
//                 name="languages"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="fav_movies"> Favourite Movies </label>
//             </div>
//               <textarea
//                 name="fav_movies"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="fav_food"> Favourite Food </label>
//             </div>
//               <textarea
//                 name="fav_food"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="state"> State </label>
//             </div>
//               <textarea
//                 name="state"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//             <div>
//               <label htmlFor="city"> City </label>
//             </div>
//               <textarea
//                 name="city"
//                 onChange={(event) => this.handleOnChange(event)} />
//           </div>
//
//           <div>
//               <input
//                   name="profile_pics"
//                   type="file"
//                   multiple={true}
//                   accept="image/*"
//                   id="profile_pics"
//                   onChange={(event) => this.handleOnChange(event)} />
//                   className="form-control"
//                 />
//               </div>
//             <button type="submit"> Save My Profile </button>
//         </form>
//       </div>
//       )
//     }
// }
//
// function mapStateToProps(state) {
//   return { addUser: state.users.users } // the last user in state.
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addUser: addUser}, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
//
//
//
// // have an action for the form. The action is gonna be in charge of adding users to the redux state.
// // After that, we send our action to the reducer.Then we will use mapStateToProps and mapDispatchToProps
// // to access the results from the reducer
//
//
//

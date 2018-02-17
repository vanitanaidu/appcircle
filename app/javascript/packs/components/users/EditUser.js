import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateUser } from '../../actions/update_user_action';

import Comments from '../comments/index';
import AddCommentForm from '../comments/AddCommentForm';
import DeleteUser from './DeleteUser';


class EditUser extends Component {
  constructor(props) {
    super(props)
      this.state = {
        editable: false
      }
  }

  handleEdit = () => {
    if(this.state.editable) {

      const user = {
        id: this.props.userId,
        name: this.refs.name.value,
        age: this.refs.age.value,
        interests: this.refs.interests.value,
        about_me: this.refs.about_me.value,
        past_jobs: this.refs.past_jobs.value,
        fav_food: this.refs.fav_food.value,
        fav_movies: this.refs.fav_movies.value,
        state: this.refs.state.value,
        city: this.refs.city.value,
        languages: this.refs.languages.value,
        schools: this.refs.schools.value
      }
      this.props.updateUser(user)
    }

    this.setState({
      editable: !this.state.editable
    })
    // this.props.history.replace("/users/" + id)
  }

  renderUser = () => {


    const { user } = this.props
 if(!user) {
   return "loading..."
 }

    //either display a form with default value or display the new {user.name} depending on if the component state is editable.
    const name = this.state.editable ? <input type="text" ref="name" defaultValue={user.name}/> : <div> {user.name} </div>
    const age = this.state.editable ? <textarea ref="age" defaultValue={user.age}/> : <div> {user.age} </div>
    const interests = this.state.editable ? <textarea ref="interests" defaultValue={user.interests}/> : <div> {user.interests} </div>
    const about_me = this.state.editable ? <textarea ref="about_me" defaultValue={user.about_me}/> : <div> {user.about_me} </div>
    const past_jobs = this.state.editable ? <textarea ref="past_jobs" defaultValue={user.past_jobs}/> : <div> {user.past_jobs} </div>
    const fav_food = this.state.editable ? <textarea ref="fav_food" defaultValue={user.fav_food}/> : <div> {user.fav_food} </div>
    const fav_movies = this.state.editable ? <textarea ref="fav_movies" defaultValue={user.fav_movies}/> : <div> {user.fav_movies} </div>
    const state = this.state.editable ? <textarea ref="state" defaultValue={user.state}/> : <div> {user.state} </div>
    const city = this.state.editable ? <textarea ref="city" defaultValue={user.city}/> : <div> {user.city} </div>
    const languages = this.state.editable ? <textarea ref="languages" defaultValue={user.languages}/> : <div> {user.languages} </div>
    const schools = this.state.editable ? <textarea ref="schools" defaultValue={user.schools}/> : <div> {user.schools} </div>

      return (
        <div key={user.id}>
          <div className="jumbotron" >
            <div className="container">
              <h2> {name} </h2>
              <h6> {about_me} </h6>
            </div>
          </div>

          <DeleteUser userId={this.props.userId} history={this.props.history} />
          <button className="btn float-right btn btn-custom" onClick={this.handleEdit.bind(this)}>
           {this.state.editable ? 'Submit' : 'Edit'}
          </button>

          <div className="container" id="show-user-detail">
           <h6> Age: <small> {age} </small> </h6>
           <h6> Interest: <small> {interests} </small> </h6>
           <h6> Past Jobs: <small> {past_jobs} </small> </h6>
           <h6> Favorite Food: <small> {fav_food} </small> </h6>
           <h6> Favorite movies: <small> {fav_movies} </small> </h6>
           <h6> State: <small> {state} </small> </h6>
           <h6> City: <small> {city} </small> </h6>
           <h6> Languages: <small> {languages} </small> </h6>
           <h6> Schools: <small> {schools} </small> </h6>
         </div>
       </div>
      )
  }
  render() {
    const {match} = this.props
    const renderUser = this.props.loading ? "loading..." : this.renderUser()

    return (
      <div>
      {renderUser}

        <Comments userId={this.props.userId} users={this.props.users} history={this.props.history} />
        <AddCommentForm userId={this.props.userId} history={this.props.history} />
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return { users: users.users, loading: users.loading }
}

export default connect(null, { updateUser })(EditUser);

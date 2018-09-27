import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchUser } from '../../actions/fetch_user_action';
import { deleteUser } from '../../actions/delete_user_action';
import { updateUser } from '../../actions/update_user_action';
import Comments from '../comments/index';
import AddCommentForm from '../comments/AddCommentForm';
import DeleteUser from './DeleteUser';
import Images from '../images/Images';
import LikeButton from './LikeButton';

class ShowUser extends Component {
  constructor(props) {
    super(props)
      this.state = {
        editable: false
      }
  }

  componentDidMount = () => {
    const { id } = this.props.match.params //same as writing const id = this.props.match.params.id
    this.props.fetchUser(id)
  }

  handleEdit = () => {
    const { id } = this.props.match.params
    if(this.state.editable) {

      const user = {
        id: this.props.match.params.id,
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

  }

  renderUser = () => {
    const user = this.props.user
    if(!user) {
      return "loading..."
    } else {
    //either display a form with default value or display the user details
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
            <div className="container show-container">
                <div className="row">
                  <div className="col-md-5">
                    <Images/>
                  </div>
                  <br/>
                  <div className="col-md-7 details">
                    <h2> {name} </h2>
                    <br></br>
                    <h6> {about_me} </h6>
                    <div id="like-button"> <LikeButton user={user}/> </div>
                    <div id="edit-submit-button">
                      <button onClick={this.handleEdit.bind(this)}>
                       {this.state.editable ? 'Submit Changes' : 'Edit User'}
                      </button>
                    </div>
                    <div id="delete-button"> <DeleteUser userId={this.props.match.params.id} history={this.props.history} /> </div>

                  </div>
                </div>

            </div>
        </div>




          <div className="container show-container">
            <div className="grid-container" id="show-user-detail">

             <div className="item1"> Age: </div>
             <div className="item"> {age} </div>
             <div className="item1"> Interest: </div>
             <div className="item"> {interests} </div>
             <div className="item1"> Past Jobs: </div>
             <div className="item"> {past_jobs} </div>
             <div className="item1"> Favorite Food: </div>
             <div className="item"> {fav_food} </div>
             <div className="item1"> Favorite movies: </div>
             <div className="item"> {fav_movies} </div>
             <div className="item1"> State: </div>
             <div className="item"> {state} </div>
             <div className="item1"> City: </div>
             <div className="item"> {city} </div>
             <div className="item1"> Languages: </div>
             <div className="item"> {languages} </div>
             <div className="item1"> Schools: </div>
             <div className="item"> {schools} </div>

          </div>
        </div>


       </div>
      )
  }
}

   render() {
      const {match} = this.props
      const renderUser = this.props.userLoading ? "loading..." : this.renderUser()
       return (
       <div>
        {renderUser}
         <br/>
         <Comments userId={match.params.id} users={this.props.users} history={this.props.history} />
         <AddCommentForm userId={match.params.id} history={this.props.history} />
       </div>
     )
   }
}
                      // {users} same as users = state.users
function mapStateToProps({users}, ownProps) {
  return { user: users.users[ownProps.match.params.id], userLoading: users.loading }
}

export default connect(mapStateToProps, { fetchUser, updateUser })(ShowUser);

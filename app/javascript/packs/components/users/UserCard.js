import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import Images from '../images/Images';
import LikeButton from './LikeButton';


export default class UserCard extends Component {

  userCard = () => {
    const {user} = this.props
    return (
      <div>
        <Link to= {"users/" + user.id} >
            <Images/>
            <br />
            <h5> {user.name} </h5>
            <h6> About me: <small> {user.about_me} </small> </h6>
            <h6> Interests: <small> {user.interests} </small> </h6>
            <h6> State/City: <small> {user.state} - {user.city} </small> </h6>
            <br></br>

        </Link>
        <LikeButton userId={user.id} user={this.props.user}/>
      </div>
    )
  }

  // <button onClick={this.buttonClick}> Like {this.state.counter}</button>
  // <button onClick={this.callApi}> Call Api </button>


  render() {

    return (
      <div>
          {this.userCard()}
        </div>
    )
  }
}



// Instructions from Cernan:
// *done  1. Get the Like feature working so that each individual card updates when clicked on - NO PERSISTENCE
//
// *done 2. Get the Like feature working WITH PERSISTENCE - remove local state - separate branch (edited)
// 3. Write a blog post on the fetch API - use the example of the console.logs in your post
// 4. Study on js array methods like filter and sort
// meetme.so/reactlearnassessment  (Schedule another appointment here)

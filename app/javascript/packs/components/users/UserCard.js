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
            <h6 class="state"> State/City: <small> {user.state} - {user.city} </small> </h6>
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

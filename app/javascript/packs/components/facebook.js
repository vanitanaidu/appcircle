import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  }

responseFacebook = response => {
  this.setState({
    isLoggedIn: true,
    userID: response.userID,
    name: response.name,
    email: response.email,
    picture: response.picture.data.url,
  })
}

  componentClicked = () => {
    console.log("clicked")
  }
  render() {
    let fbContent;
      if(this.state.isLoggedIn) {
        fbContent = (
          <div style={{
            width: '400px',
            margin: 'auto',
            background: '400px'
            }}>

            <h5> Welcome {this.state.name} </h5>
          </div>
            // <img scr={this.state.picture} alt={this.state.name} /> if you want the image displayed
        )
      } else {
          fbContent = (<FacebookLogin
          appId="172059453632437"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)
      }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

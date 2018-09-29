import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  }

responseGoogle = (response) => {
  this.setState({
    isLoggedIn: true,
    userID: response.userID,
    name: response.name,
    email: response.email,
    picture: response.picture.data.url,
  })
}

responseFailure = (response) => {
  return <div> This was a failure</div>
}

  render() {
    let googleContent;
      if(this.state.isLoggedIn) {
        googleContent = (
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
          googleContent = (
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseFailure}
          />)
      }
    return (
      <div>
        {googleContent}
      </div>
    )
  }
}

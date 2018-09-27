import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

import Users from './components/users/index';
import errorPage from './components/error/error';
import AddUserForm from './components/users/AddUserForm';
import ShowUser from './components/users/ShowUser';
<<<<<<< HEAD
import Facebook from './components/facebook';
=======

// const responseGoogle = (response) => {
//   console.log(response);
// }
//
// const responseFacebook = (response) => {
//   console.log(response);
// }
>>>>>>> 25b94055ebf230b98a9199fbddaab6040df633a7

class App extends Component {

<<<<<<< HEAD
const App = () => (
  <div>
    <nav className="navbar navbar-custom navbar-fixed-top" id="navbar-bottom">
      <div className="container navbar-header">
        <Link to="/" className="navbar-brand" id="text">Home</Link>
        <Link to="/users/new" id="text">Add a New User</Link>
        <Facebook/>
      </div>
    </nav>


    <Switch>
      <Route path="/users/new" component={AddUserForm} /> // positioning matters
      <Route path="/users/:id" component={ShowUser} />
      <Route exact path="/" component={Users} />
=======
>>>>>>> 25b94055ebf230b98a9199fbddaab6040df633a7

  render() {
    return (
      <div>
        <nav className="navbar navbar-custom fixed-top" id="navbar-bottom">
          <div className="container navbar-header ">
            <Link to="/" className="navbar-brand" id="text">Home</Link>
            <Link to="/users/new" id="text">Add a New User</Link>
          </div>
        </nav>


        <Switch>
          <Route path="/users/new" component={AddUserForm} /> // positioning matters
          <Route path="/users/:id" component={ShowUser} />
          <Route exact path="/" component={Users} />

          <Route component={errorPage} />
        </Switch>
      </div>
    )
  }
}
export default App


// whatever's on this page is going to render across all the pages of your app. The reason for this is in react_app.js, under return, < app /> is the child component of react_app.

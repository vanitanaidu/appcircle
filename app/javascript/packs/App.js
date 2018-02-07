import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Users from './components/users/index';
import UserDetails from './components/users/UserDetails';
import errorPage from './components/home/error';
import AddUserForm from './components/users/AddUserForm';

const App = () => (
  <div>
    <nav className="text-xs-right">
      <Link className= "btn btn-primary" to="/">Home</Link>
      <Link to="/users">Users</Link>
      <br/>
      <Link to="/users/new">Add a New User</Link>
    </nav>

    <div>
    <Switch>
      <Route path="/users/new" component={AddUserForm} />
      <Route path="/users" component={Users} />
      <Route exact path="/" component={Home} />

      <Route component={errorPage} />
    </Switch>
    </div>

  </div>
)

export default App

// whatever's on this page is going to render across all the pages of your app. The reason for this is in react_app.js, under return, < app /> is the child component of react_app.

import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'


import Home from './components/home/home'
import Users from './components/users/index'
import UserDetails from './components/users/UserDetails'
import errorPage from './components/home/error'

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to ="/users/:id">My Profile</Link>

    </nav>
    <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/users/:id" component={UserDetails} />
      <Route component={errorPage} />
    </Switch>
    </div>
  </div>
)

export default App

// whatever's on this page is going to render across all the pages of your app. The reason for this is in react_app.js, under return, < app /> is the child component of react_app.

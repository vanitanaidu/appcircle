import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './views/home/home'
import Users from './views/users/index'
import UserDetails from './views/users/UserDetails'

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to ="/MyProfilePage">My Profile</Link>

    </nav>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/MyProfilePage" component={UserDetails} />
    </div>
  </div>
)

export default App

// whatever's on this page is going to render across all the pages of your app

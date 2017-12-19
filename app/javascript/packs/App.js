import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './views/home'
import Users from './views/users'

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>

    </nav>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />


      </div>
  </div>
)

export default App

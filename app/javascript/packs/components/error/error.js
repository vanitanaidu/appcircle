import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

const errorPage = () => {

    return (
      <div>
        <nav className="navbar navbar-custom navbar-fixed-top" id="navbar-bottom">
          <div className="container navbar-header">
            <Link to="/" className="navbar-brand" id="text">Home</Link>
          </div>
        </nav>
        <h3> Loading Error... </h3>
      </div>
    )


}

export default errorPage

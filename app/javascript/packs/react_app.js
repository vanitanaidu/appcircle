import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'

import UsersReducer from './reducers/reducer_users';

import App from './App.js'

const history = createHistory()


const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    users: UsersReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,

    document.getElementById('root'),
  )
})

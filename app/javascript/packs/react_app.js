import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import thunk from 'redux-thunk';

import UsersReducer from './reducers/reducer_users';
import addUserReducer from './reducers/reducer_add_user'
import App from './App'

const history = createHistory()

const middleware = routerMiddleware(history)

const useThunk = thunk

const store = createStore(
  combineReducers({
    users: UsersReducer,
    addUser: addUserReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware, useThunk)
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

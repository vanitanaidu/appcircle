import { addUser } from '../actions';

export default function addUserReducer(state = {users:[]}, action) {
  switch (action.type) {
  case 'ADD_USER':
  console.log("action payload is", action.payload)
    return Object.assign({}, state, {users: [...state.users, action.payload]})
  default:
    return state;
  }
}
//
// action.payload here returns the user that was created.
//   by doing this `return Object.assign({}, state, {users: [...state.users, action.payload]})`,
//  we are copying the current users in a new redux state and adding action.payload whch is a new created.
//  This was we are not overwriting the current state we are just non destructively creating a new state
//  with all the current data with the new data.

import { addUser } from '../actions';

const INITIAL_STATE = {users: []}

export default function addUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_USER':
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

//

//deleteUserReducer
// const INITIAL_STATE = {users: []}
//
// export default function deleteUserReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'DELETE_USER':
//       const users = state.users.filter(user => user.id !== action.payload.id)
//         return { ...state, users }
//
//       }
//     }

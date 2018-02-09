// import { fetchUsers } from '../actions';

export default function showUserReducer(state = {users: []}, action) {
  console.log("reducer")
  switch (action.type) {
  case 'FETCH_USER':
  console.log(action.payload)
    return { ...state, {action.payload})
  default:
    return state;
  }
}

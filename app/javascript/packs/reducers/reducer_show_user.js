import { fetchUser } from '../actions';

export default function showUserReducer(state = {users: []}, action) {
  switch (action.type) {
  case 'FETCH_USER':
    return { ...state, user: action.payload }
  default:
    return state;
  }
}

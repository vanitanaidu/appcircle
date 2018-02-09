import { fetchUser } from '../actions';

const INITIAL_STATE = {users: []}

export default function showUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_USER':

    return Object.assign({}, state, {users: [...state.users, action.payload]})
  default:
    return state;
  }
}

import { updateUser } from '../actions';

const INITIAL_STATE = {users: []}

export default function updateUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'UPDATE_USER':

    return Object.assign({}, state, {users: [...state.users, action.payload]})
  default:
    return state;
  }
}

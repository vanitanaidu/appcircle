import _ from 'lodash';
import { FETCH_USERS } from '../actions';

export default function UsersReducer(state = {}, action) {
  switch (action.type) {
  case "FETCH_USERS":
    return _.mapKeys(action.payload.data, 'id')
  default:
    return state;
  }
}

// case "GET_USERS":
//   return Object.assign({}, state, {users: action.payload})
// where `action.payload` would be the array of users get back as json from the api.. then when we have a component that has
// mapStateToProps(state){
//   return {
//     getUsers: state.users.users
//   }
//   componentDidMount = () => {
//     this.props.getUsers();
//   }

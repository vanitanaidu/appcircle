// import _ from 'lodash';
import { fetchUsers } from '../actions';

export default function usersReducer(state = {users: []}, action) {
  console.log("reducer")
  switch (action.type) {
  case 'FETCH_USERS':
  console.log(action.payload)
    return Object.assign({}, state, {users: action.payload})
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

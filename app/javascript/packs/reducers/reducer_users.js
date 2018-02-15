import { fetchUsers } from '../actions/index';
import { addUser } from '../actions/add_user_action';
import { fetchUser } from '../actions/show_user_action';
import { updateUser } from '../actions/update_user_action';

import { fetchComments } from '../actions/comments/index';
import { addComment } from '../actions/comments/add_comment_action';


const INITIAL_STATE = {users: [], comments: [], loading: false}

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

  case 'LOADING':
    return Object.assign({}, state, {loading: true})

  case 'FETCH_USERS':
    return Object.assign({}, state, {users: action.payload, loading: false})

  case 'ADD_USER':
    return Object.assign({}, state, {users: [...state.users, action.payload], loading: false})

  case 'FETCH_USER':
    return Object.assign({}, state, {users: [...state.users, action.payload], loading: false})

  case 'UPDATE_USER':
    return Object.assign({}, state, {users: [...state.users, action.payload], loading: false})

    case 'FETCH_COMMENTS':
      return Object.assign({}, state, {comments: action.payload, loading: false})

    case 'ADD_COMMENT':
      return Object.assign({}, state, {comments: [...state.comments, action.payload], loading: false})

  default:
    return state
  }
}




//this is the same as FETCH_USERS
// case 'FETCH_COMMENTS':
//   return Object.assign({}, state, {comments: action.payload})


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

import { fetchComments } from '../actions/comments/index';
import { addComment } from '../actions/comments/add_comment_action';

const INITIAL_STATE = {comments: {}, loading: false}

export default function CommentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

  case 'LOADING_COMMENTS':
    return Object.assign({}, state, {loading: true})

    case 'FETCH_COMMENTS':
      const newstate = _.mapKeys(action.payload, "id")
      return Object.assign({}, state, {comments: newstate, loading: false})

    case 'ADD_COMMENT':
      return Object.assign({}, state, {comments: {...state.comments, [action.payload.id]: action.payload}, loading: false})

    case 'DELETE_COMMENT':
      const new_comment = {...state.comments}
      delete new_comment[action.payload]
      return Object.assign({}, state, {comments: new_comment, loading: false})

  default:
    return state
  }
}




//this is the same as FETCH_USERS
// case 'FETCH_COMMENTS':
//   return Object.assign({}, state, {comments: action.payload})

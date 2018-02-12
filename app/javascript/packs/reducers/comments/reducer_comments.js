import { fetchComments } from '../../actions/comments/index';

const INITIAL_STATE = {comments: []}

export default function commentsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_COMMENTS':
    return Object.assign({}, state, {comments: action.payload})
  default:
    return state;
  }
}

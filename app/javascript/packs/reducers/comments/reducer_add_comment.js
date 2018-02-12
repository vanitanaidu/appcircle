import { addComment } from '../../actions/comments/add_comment_action';

const INITIAL_STATE = {comments: []}

export default function addCommentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_COMMENT':
    return Object.assign({}, state, {comments: [...state.comments, action.payload]})
  default:
    return state;
  }
  console.log(state)
}

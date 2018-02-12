export function fetchComments(id) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_COMMENTS' });
    return fetch(`/api/users/${id}/reviews`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }));
  };
}

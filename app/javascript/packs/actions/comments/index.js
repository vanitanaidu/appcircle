export function fetchComments(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(`/api/users/${id}/reviews`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }));
  };
}

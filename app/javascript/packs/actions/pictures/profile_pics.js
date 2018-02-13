export function fetchPictures(id) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PICTURES' });
    return fetch(`/api/users/${id}/reviews`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_PICTURES', payload: comments }));
  };
}

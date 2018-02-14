export function fetchPictures(id) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PICTURES' });
    return fetch(`/api/users/:user_id/photos/:id`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_PICTURES', payload: comments }));
  };
}

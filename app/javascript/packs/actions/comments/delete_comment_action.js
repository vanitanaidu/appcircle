export function deleteComment(id, user_id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_COMMENT' });
    return fetch(`/api/users/${user_id}/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(id => dispatch({ type: 'DELETE_COMMENT', payload: id }));
  };
}

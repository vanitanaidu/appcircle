export function deleteComment(id, user_id) {
  console.log("the id is ", id)
  return (dispatch) => {
    dispatch({ type: 'DELETE_COMMENT' });
    return fetch(`/api/users/${user_id}/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => dispatch({ type: 'DELETE_COMMENT', payload: id }));
  };
}

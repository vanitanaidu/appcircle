export function deleteUser(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_USER' });
    return fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(id => dispatch({ type: 'DELETE_USER', payload: id }));
  };
}

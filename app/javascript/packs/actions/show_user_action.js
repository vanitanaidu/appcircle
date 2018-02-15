export function fetchUser(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', payload: user }));
  };
}

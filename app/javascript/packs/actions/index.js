
export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/api/users')
      .then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users }));
  };
}

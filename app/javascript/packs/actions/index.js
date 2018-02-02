
export function fetchUsers() {
console.log(" action")
  return (dispatch) => {
    dispatch({ type: 'FETCH_USERS' });
    return fetch('/api/users')
      .then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users }));
  };
}

export function updateUser(user) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_USER' });
    return fetch(`/api/users/${user.id}`, {

      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(currentUser => dispatch({ type: 'UPDATE_USER', payload: currentUser}));
  };
}

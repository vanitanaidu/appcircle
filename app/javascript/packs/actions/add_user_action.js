
export function addUser(user, callback) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch('/api/users', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(newUser => {
        if(newUser.errors) {
          dispatch({ type: 'ERRORS', payload: newUser.errors.messages })
        }
        else {
          dispatch({ type: 'ADD_USER', payload: newUser })
        }
      })

      .then(() => callback());
  };
}
//
// what is happening here is we are fetching from the backend on this line `  return fetch('/api/users', {`
//   then we are telling it that we want to do a 'post' for that route so it knows thta we are trying to create a new user not display current users,
// we then go ahead and `stringfy` the JavaScript object to a JSON string on line 11.

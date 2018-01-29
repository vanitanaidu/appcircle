export  function fetchUsers() {
  const request = fetch('/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}

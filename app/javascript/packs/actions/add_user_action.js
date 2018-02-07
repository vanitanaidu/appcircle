export function addUser(newUser) {
  console.log("you have hit the add_user_action.js file")
  debugger
    return {
      type: "ADD_USER"
      payload: newUser
    }
}


const INITIAL_STATE = {users: []}

export default function deleteUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DELETE_USER':
      const users = state.users.filter(user => user.id !== action.payload.id)
        return { ...state, users }

      }
    }

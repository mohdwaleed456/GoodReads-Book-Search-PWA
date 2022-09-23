const initialState = { users: [] }

const Signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { ...state, users: action.payload }
    default:
      return state
  }
}

export default Signup

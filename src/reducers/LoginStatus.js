const initialState = null

const LoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STATUS':
      return { ...state, status: action.payload }
    default:
      return state
  }
}

export default LoginStatus

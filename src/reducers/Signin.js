const initialState = [
  { name: 'Waleed', email: 'mohdwaleed456@gmail.com', password: '123' },
  { name: 'Ali', email: 'aliahmed@gmail.com', password: '456' },
  { name: 'Talha', email: 'talha123@gmail.com', password: '789' }
]

const Signin = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state
    //   return { ...state, users: action.payload }
    default:
      return state
  }
}

export default Signin

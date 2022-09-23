const initialState = ''

const BookImage = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_IMAGE':
      return { ...state, books: action.payload }
    default:
      return state
  }
}

export default BookImage

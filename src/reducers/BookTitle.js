const initialState = ''

const BookTitle = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_TITLE':
      return { ...state, books: action.payload }
    default:
      return state
  }
}

export default BookTitle

const initialState = ''

const BookRating = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_RATING':
      return { ...state, books: action.payload }
    default:
      return state
  }
}

export default BookRating

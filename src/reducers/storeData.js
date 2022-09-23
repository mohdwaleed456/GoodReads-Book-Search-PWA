const initialState = { books: [] }

const StoreBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return { ...state, books: action.payload }
    default:
      return state
  }
}

export default StoreBooks

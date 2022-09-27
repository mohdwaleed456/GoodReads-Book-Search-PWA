import StoreBooks from './storeData'
import BookList from './BookList'
import BookTitle from './BookTitle'
import BookImage from './BookImage'
import BookRating from './BookRating'
import Signin from './Signin'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  StoreBooks,
  BookList,
  BookTitle,
  BookImage,
  BookRating,
  Signin,
})

export default rootReducer

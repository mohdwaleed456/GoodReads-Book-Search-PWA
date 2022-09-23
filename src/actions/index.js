// import { actionTypes } from "./actionTypes"

export const BookAction = books => {
  return {
    type: 'STORE_DATA',
    payload: books
  }
}

export const BookList = books => {
  return {
    type: 'BOOK_LIST',
    payload: books
  }
}

export const BookTitle = books => {
  return {
    type: 'BOOK_TITLE',
    payload: books
  }
}

export const BookImage = books => {
  return {
    type: 'BOOK_IMAGE',
    payload: books
  }
}

export const BookRating = books => {
  return {
    type: 'BOOK_RATING',
    payload: books
  }
}

export const Signup = users => {
  return {
    type: 'SIGNUP',
    payload: users
  }
}

export const Signin = users => {
  return {
    type: 'LOGIN',
    payload: users
  }
}

export const LoginStatus = status => {
  return {
    type: 'LOGIN_STATUS',
    payload: status
  }
}

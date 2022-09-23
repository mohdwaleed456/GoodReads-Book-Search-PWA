import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ isLoggedIn, children }) => {
  return <>{!isLoggedIn ? <Navigate to='/Login' replace /> : children}</>
}
export default Protected

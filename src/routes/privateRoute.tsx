import React, { useEffect } from 'react'

import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const userData = localStorage.getItem('user')
  //@ts-ignore
  const user = JSON.parse(userData)
  return user.accessToken ? children : <Navigate to="/" replace />
}

export default PrivateRoute

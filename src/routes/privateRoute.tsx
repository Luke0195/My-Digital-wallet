import React from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem('USER_TOKEN')
  //@ts-ignore

  return token ? children : <Navigate to="/" />
}

export default PrivateRoute

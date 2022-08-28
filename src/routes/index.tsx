import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import PrivateRoute from '../routes/privateRoute'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Switch>
  )
}

export default Routes

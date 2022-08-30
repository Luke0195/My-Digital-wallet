import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import PrivateRoute from '../routes/privateRoute'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Layout from '../features/Main/ui'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
      <Route
        path="home"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      />
    </Switch>
  )
}

export default Routes

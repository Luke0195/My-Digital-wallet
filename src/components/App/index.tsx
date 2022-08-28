import React from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '../../assets/styles/global'
import theme from '../../assets/theme'
import SignIn from '../../pages/SignIn'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <GlobalStyles />
      <ToastContainer autoClose={false} position="top-right" closeOnClick draggable={false} closeButton={true} />
    </ThemeProvider>
  )
}

export default App

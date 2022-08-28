import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '../../assets/styles/global'
import theme from '../../assets/theme'

import Routes from '../../routes'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
        <ToastContainer autoClose={false} position="top-right" closeOnClick draggable={false} closeButton={true} />
      </CookiesProvider>
    </ThemeProvider>
  )
}

export default App

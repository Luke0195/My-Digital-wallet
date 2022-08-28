import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from './assets/styles/global'
import theme from './assets/theme'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1> My Wallet</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

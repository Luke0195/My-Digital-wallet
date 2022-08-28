import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '../../assets/styles/global'
import theme from '../../assets/theme'
import SignIn from '../../pages/SignIn'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

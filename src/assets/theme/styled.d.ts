import '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      darkBlue: string
      ligthRed: string
      white: string
      link: string
    }
  }

  interface ThemeOptions {
    colors?: {
      darkBlue: string
      ligthRed: string
      white: string
      link: string
    }
  }
}

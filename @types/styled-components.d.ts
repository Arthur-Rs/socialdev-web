import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: {
        darkness: string
        dark: string
        medium: string
        light: string
        lightness: string
      }
      text: {
        dark: string
        light: string
      }
    }
  }
}
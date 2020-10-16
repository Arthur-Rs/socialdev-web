import {ThemeProvider} from 'styled-components'

import DarkTheme from '@app/styles/themes/DarkTheme'
import GlobalStyled from '@app/styles/GlobalStyles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default MyApp

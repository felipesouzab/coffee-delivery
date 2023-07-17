import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './Routes'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <HashRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </HashRouter>
      </div>
    </ThemeProvider>
  )
}

export default App

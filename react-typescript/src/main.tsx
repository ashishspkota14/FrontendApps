import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { CartProvider } from './context/cart-context/cart-context-provider'
import { ProductProvider } from './context/product-context/products-context-provider'
import GlobalStyle from './style/global-style'
import { ThemeProvider } from './style/styled-components'
import { theme } from './style/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

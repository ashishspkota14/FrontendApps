import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Product from '../product'
import { mockProducts } from './mock-products'
import { CartProvider } from '@/context/cart-context/cart-context-provider'
import userEvent from '@testing-library/user-event'

describe('test related to product rendering component', () => {
  test('Should test Product', () => {
    render(
      <CartProvider>
        <Product product={mockProducts[0]} />,
      </CartProvider>,
    )

    const productTitle = screen.getByText('Cropped Stay Groovy off white')

    expect(productTitle).toBeInTheDocument

    const cartButton = screen.getByText('Add to Cart')

    userEvent.click(cartButton)

    // const cartQuantity = screen.getByText('Quantity: 1')
  })

  test('should create snapshot of product component', () => {
    const renderedView = render(
      <CartProvider>
        <Product product={mockProducts[0]} />,
      </CartProvider>,
    )

    expect(renderedView).toMatchSnapshot
  })
})

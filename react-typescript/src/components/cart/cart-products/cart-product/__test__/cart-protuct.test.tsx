import { render } from '@testing-library/react'
import { test } from 'vitest'
import CartProduct from '../cart-product'
import { mockedCartProduct } from './mock-cart-product'

test('should test product cart component', () => {
  render(<CartProduct product={mockedCartProduct[0]} />)
})

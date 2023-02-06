// manage total product info in cart
import { useCartContext } from './cart-context-provider'
import { ICartProduct } from '@/model'

export const useTotal = () => {
  const { total, setTotal } = useCartContext()

  function cartTotal(products: ICartProduct[]) {
    const productQuantity = products.reduce(
      (totalQuantity, product: ICartProduct) => totalQuantity + product.quantity,
      0,
    )

    const totalPrice = products.reduce(
      (sum: number, currentProduct: ICartProduct) =>
        currentProduct.price * currentProduct.quantity + sum,
      0,
    )

    // TODO
    // write another function for installment

    const total = {
      productQuantity,
      totalPrice,
      currencyCode: 'USD',
      currencySymbol: '$',
    }

    setTotal(total)
  }

  return { total, cartTotal }
}

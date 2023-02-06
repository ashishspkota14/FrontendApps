import { ICartProduct } from '@/model'
import { useCartContext } from './cart-context-provider'

export const useProductCart = () => {
  const { products, setProducts } = useCartContext()

  let updatedProductInCart: ICartProduct[]

  function addProduct(newProduct: ICartProduct) {
    const isProductInCart = products.some((product) => product.id === newProduct.id)

    if (isProductInCart) {
      // TODO
      // update the quantity of product
    } else {
      updatedProductInCart = [...products, newProduct]
    }
    setProducts(updatedProductInCart)
  }

  return { addProduct }
}

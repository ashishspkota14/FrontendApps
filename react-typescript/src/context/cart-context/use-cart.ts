import { useCartContext } from './cart-context-provider'

function useCart() {
  const { isOpen, setIsOpen, products } = useCartContext()

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return { isOpen, openCart, closeCart, products }
}

export default useCart

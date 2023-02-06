import { createContext, ReactNode, useContext, useState } from 'react'
import { ICartProduct, ICartTotal } from '../../model'

interface ICartContext {
  isOpen: boolean
  setIsOpen(state: boolean): void
  products: ICartProduct[]
  setProducts(products: ICartProduct[]): void
  total: ICartTotal
  setTotal(state: ICartTotal): void
}

const CartContext = createContext<ICartContext | undefined>(undefined)

const totalInitialValues = {
  totalPrice: 0,
  productQuantity: 0,
  currencyCode: 'USD',
  currencySymbol: '$',
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState<ICartProduct[]>([])
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues)

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        products,
        setProducts,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('CartContext must be within provider!!')
  }

  return context
}

import CartProduct from '@/components/cart/cart-products/cart-product/cart-product'
import { ICartProduct } from '@/model'
import * as S from './style'

interface IProps {
  products: ICartProduct[]
}

function CartProducts({ products }: IProps) {
  return (
    <S.Container>
      {products?.length ? (
        products.map((product) => <CartProduct product={product} key={product.sku} />)
      ) : (
        <S.CartProductsEmpty>
          Add some products in the cart <br />
          :)
        </S.CartProductsEmpty>
      )}
    </S.Container>
  )
}

export default CartProducts

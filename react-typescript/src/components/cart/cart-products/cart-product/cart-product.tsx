import { ICartProduct } from '@/model'
import * as S from './style'

function CartProduct({ product }: { product: ICartProduct }) {
  const { title, quantity, price, currencyId } = product
  return (
    <S.Container>
      <S.DeleteButton title='remove product from cart' />
      <S.Image />
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Desc>Quantity: {quantity}</S.Desc>
      </S.Details>
      <S.Price>
        <p>
          {currencyId} {price}
        </p>
        <div>
          <S.ChangeQuantity>-</S.ChangeQuantity>
          <S.ChangeQuantity>+</S.ChangeQuantity>
        </div>
      </S.Price>
    </S.Container>
  )
}

export default CartProduct

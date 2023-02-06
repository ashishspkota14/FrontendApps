import useCart from '@/context/cart-context/use-cart'
import CartProducts from './cart-products/cart-products'
import * as S from './style'
import CartImage from '/images/cart-icon.png'

function Cart() {
  const { isOpen, openCart, closeCart, products } = useCart()

  function handleCartToggle(isOpen: boolean) {
    return isOpen === true ? closeCart() : openCart()
  }
  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={() => handleCartToggle(isOpen)}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <S.CartIcon icon={CartImage}>
            <S.CartQuantity title='Products in cart quantity'>5</S.CartQuantity>
          </S.CartIcon>
        )}
      </S.CartButton>

      {isOpen && (
        <S.CartContent>
          <S.CartContentHeader>
            <S.CartIcon large>
              <S.CartQuantity>5</S.CartQuantity>
            </S.CartIcon>
            <S.HeaderTitle>Cart</S.HeaderTitle>
          </S.CartContentHeader>

          <CartProducts products={products} />

          <S.CartFooter>
            <S.Sub>SUBTOTAL</S.Sub>
            <S.SubPrice>
              <S.SubPriceValue>100</S.SubPriceValue>
              <S.SubPriceInstallment>OR UP TO 10</S.SubPriceInstallment>
            </S.SubPrice>
            <S.CheckoutButton autoFocus>Checkout</S.CheckoutButton>
          </S.CartFooter>
        </S.CartContent>
      )}
    </S.Container>
  )
}

export default Cart

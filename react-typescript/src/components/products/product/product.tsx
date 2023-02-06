import { useProductCart } from '@/context/cart-context/use-product-cart'
import useCart from '@/context/cart-context/use-cart'

import { IProduct } from '@/model'
import { formatPrice } from '@/utils/formatPrice'
import { BuyButton, Container, Image, Price, Shipping, Title, Value } from './style'

function Product({ product }: { product: IProduct }) {
  const { isFreeShipping, title, imageUrl, price, currencyFormat, currencyId } = product
  const { openCart } = useCart()
  const { addProduct } = useProductCart()

  const formattedPrice = formatPrice(price, currencyId)
  return (
    <Container sku={1}>
      {isFreeShipping && <Shipping>Free shipping!</Shipping>}
      <Image alt='test image' imgLink={imageUrl}></Image>
      <Title>{title}</Title>
      <Price>
        <Value>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.toFixed(0)}</b>
          <span>.{formattedPrice.toString().split('.')[1]}</span>
        </Value>
      </Price>
      <BuyButton
        onClick={() => {
          openCart()
          addProduct({ ...product, quantity: 1 })
        }}
      >
        Add to Cart
      </BuyButton>
    </Container>
  )
}

export default Product

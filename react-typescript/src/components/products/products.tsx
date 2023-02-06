import { IProduct } from '@/model'
import Product from '@/components/products/product/product'

import * as S from './style'

interface IProps {
  products: IProduct[]
}

const Products = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.map((product) => (
        <Product product={product} key={product.sku} />
      ))}
    </S.Container>
  )
}

export default Products

import { useCallback } from 'react'
import { getProducts } from '../../services/product'
import { useProductContext } from './products-context-provider'

const useProducts = () => {
  const { setProducts, setIsFetching, products, isFetching, filter, setFilter } =
    useProductContext()

  const fetcProducts = useCallback(() => {
    // TODO
    // setIsFetching(true);
    getProducts().then((fetchedProducts) => {
      console.log(fetchedProducts)
      setProducts(fetchedProducts)
      // setIsFetching(false)
    })
  }, [setIsFetching, setProducts])


  // Write filter logic here
  const filterProduct = (filters: string[]) => {
    // const filteredProduct
    // setFilter(filters)
    // setProducts(filteredProduct)
  }

  filterProduct(['M'])

  return { fetcProducts, isFetching, products }
}

export default useProducts

import axios from 'axios'
import { IProductResponse } from '../model'

export async function getProducts() {
  const { data }: IProductResponse = await axios('https://cartapi.gorakhjoshi.repl.co')
  console.log(data)

  // const { products } = data || []
  return data || []
}

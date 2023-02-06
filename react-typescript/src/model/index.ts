export interface IProduct {
  availableSizes: string[]
  currencyFormat: string
  currencyId: string
  description: string
  id: number
  installments: number
  isFreeShipping: boolean
  price: number
  sku: number
  style: string
  title: string
  imageUrl: string
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface ICartTotal {
  totalPrice: number
  productQuantity: number
  currencyCode: string
  currencySymbol: string
}

export interface IProductResponse {
  data: IProduct[]
}

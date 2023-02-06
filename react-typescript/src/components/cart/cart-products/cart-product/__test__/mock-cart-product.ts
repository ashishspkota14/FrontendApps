import { ICartProduct } from '@/model'

export const mockedCartProduct: ICartProduct[] = [
  {
    availableSizes: ['X', 'L', 'XL', 'XXL'],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº',
    id: 0,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 8552515751438644,
    style: 'White T-shirt',
    title: 'Cropped Stay Groovy off white',
    quantity: 1,
    imageUrl:
      'https://cea.vtexassets.com/arquivos/ids/50612538-800-auto?v=637669052617570000&width=800&height=auto&aspect=true',
  },
  {
    availableSizes: ['X', 'ML', 'L'],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 11,
    installments: 3,
    isFreeShipping: true,
    price: 13.25,
    sku: 39876704341265610,
    style: 'Wine',
    quantity: 2,
    title: 'Basic Cactus White T-shirt',
    imageUrl:
      'https://assets.vogue.com/photos/624dfcdb9cc60a90d6621a85/3:4/w_1280%2Cc_limit/slide_%2520(7).jpg',
  },
]

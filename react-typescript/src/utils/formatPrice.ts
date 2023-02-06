export const formatPrice = (price: number, currencyId: string): number => {
  return +price.toFixed(2)
}

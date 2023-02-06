// import useProducts from '@/context/product-context/use-product'
import * as S from './style'

const availableSizes = ['S', 'M', 'ML', 'XL', 'XXL']

function Filter() {
  const createCheckBox = (label: string) => (
    <S.Checkbox
      key={label}
      label={label}
      handleOnChange={() => {
        // TODO
        // Handle your check on checkbox
      }}
    />
  )

  const createRenderCheckBox = () => availableSizes.map(createCheckBox)

  return (
    <S.Container>
      <S.Title>Sizes:</S.Title>
      {createRenderCheckBox()}
    </S.Container>
  )
}

export default Filter

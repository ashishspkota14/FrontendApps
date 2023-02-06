import { test } from 'vitest'
import { render } from '@testing-library/react'
import Checkbox from './checkbox'

test('should render checkbox component', () => {
  render(<Checkbox label='test label' handleOnChange={() => 'test'} />)
})

import { render } from '@testing-library/react'

import Exemple from './exemple'

describe('Exemple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Exemple />)
    expect(baseElement).toBeTruthy()
  })
})

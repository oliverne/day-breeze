import React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App'

describe('<App />', () => {
  test('에러 없이 렌더링', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})

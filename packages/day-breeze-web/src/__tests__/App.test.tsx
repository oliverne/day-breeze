import React from 'react'
import { render } from '@testing-library/react'
import { App } from '/src/App'

describe('<App />', () => {
  it('should render correctly', () => {
    const { container } = render(<App />)
    expect(container.querySelector('h1').textContent).toBe('Hello World!')
  })
})

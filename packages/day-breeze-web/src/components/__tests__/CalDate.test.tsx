import React from 'react'
import { render } from '@testing-library/react'
import { CalDate } from '../CalDate'

describe('<CalDate />', () => {
  test('prop `day` as number', () => {
    const { getByTestId } = render(<CalDate day={20} />)
    expect(getByTestId('dateItem')).toHaveTextContent('20')
  })

  test('prop `day` as string', async () => {
    const { findByText } = render(<CalDate day="Sun" />)
    expect(await findByText('Sun')).toBeDefined()
  })

  test('renders nothing with falsy value ', () => {
    const { getByTestId } = render(
      React.createElement(CalDate, { day: false } as any)
    )
    expect(getByTestId('calendarDate')).toHaveTextContent('')
  })
})

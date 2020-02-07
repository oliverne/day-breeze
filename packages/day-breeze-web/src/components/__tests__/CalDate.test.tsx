import React from 'react'
import { render } from '@testing-library/react'
import { CalDate } from '../CalDate'

describe('<CalDate />', () => {
  test('day가 숫자일 경우', () => {
    const { getByTestId } = render(<CalDate day={20} />)
    expect(getByTestId('dateItem')).toHaveTextContent('20')
  })

  test('day가 문자열일 경우', async () => {
    const { findByText } = render(<CalDate day="Sun" />)
    expect(await findByText('Sun')).toBeDefined()
  })

  test('day가 거짓값일 경우 렌더링 하지 않음', () => {
    const { getByTestId } = render(
      React.createElement(CalDate, { day: false } as any)
    )
    expect(getByTestId('calendarDate')).toHaveTextContent('')
  })
})

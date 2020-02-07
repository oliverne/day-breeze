import React from 'react'
import { render } from '@testing-library/react'
import { Calendars } from '../Calendars'

describe('<Calendars />', () => {
  const actualDate = global.Date

  beforeAll(() => {
    const constantDate = new Date('2020-02-01T04:41:20')
    /* eslint no-global-assign:off */
    ;(global as any).Date = class extends Date {
      constructor() {
        super()
        return constantDate
      }
    }
  })

  afterAll(() => {
    global.Date = actualDate
  })

  test('스냅샷', () => {
    const { asFragment } = render(<Calendars />)

    expect(asFragment()).toMatchSnapshot()
  })
})

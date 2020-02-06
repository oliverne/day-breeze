import { getPrevVisibleDate, getNextVisibleDate } from '../dateUtils'

describe('dateUtils', () => {
  test('#getPrevVisibleDate 현재월에 표시할 이전 달의 남짜 리턴', () => {
    const prev = getPrevVisibleDate(2020, 1)
    expect(prev.year).toBe(2019)
    expect(prev.month).toBe(12)
    expect(prev.days).toEqual(expect.arrayContaining([29, 30, 31]))
  })

  test('#getNextVisibleDate 현재월에 표시할 다음 달 날짜 리턴', () => {
    const next = getNextVisibleDate(2020, 1)
    expect(next.year).toBe(2020)
    expect(next.month).toBe(2)
    expect(next.days).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8]))
  })
})

import { renderHook, act } from '@testing-library/react-hooks'
import { useCalendar } from '../index'

describe('useCalendar', () => {
  test('#setYearMonth(년, 월)', () => {
    const { result } = renderHook(() => useCalendar(2020, 1))
    expect(result.current.prevMonth).toMatchObject({
      year: 2019,
      month: 12
    })
    expect(result.current.thisMonth).toMatchObject({
      year: 2020,
      month: 1
    })
    expect(result.current.nextMonth).toMatchObject({
      year: 2020,
      month: 2
    })

    act(() => {
      result.current.setYearMonth(2020, 2)
    })

    expect(result.current.thisMonth).toMatchObject({
      year: 2020,
      month: 2
    })
  })
  
  test('#goPrevMonth', () => {
    const { result } = renderHook(() => useCalendar(2020, 5))
    act(() => result.current.goPrevMonth())
    expect(result.current.thisMonth).toEqual({
      year: 2020,
      month: 4,
      days: expect.any(Array)
    });
  });

  test('#goNextMonth', () => {
    const { result } = renderHook(() => useCalendar(2020, 8))
    act(() => result.current.goNextMonth())
    expect(result.current.thisMonth).toEqual({
      year: 2020,
      month: 9,
      days: expect.any(Array)
    });
  });
})

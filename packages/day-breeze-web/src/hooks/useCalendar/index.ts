import range from 'lodash/range'
import { useState, useEffect, useCallback } from 'react'
import { getDaysInMonth } from 'date-fns'
import {
  getPrevVisibleDate,
  getNextVisibleDate,
  MONTH_TITLES,
  IMonthDate
} from './dateUtils'

interface IUseCalendar {
  prevMonth: IMonthDate
  thisMonth: IMonthDate
  nextMonth: IMonthDate
  setYearMonth: (year: number, month: number) => void
  monthTitle: string
  goPrevMonth: () => void
  goNextMonth: () => void
}

const INITIAL_DATA: IMonthDate = {
  year: 0,
  month: 0,
  days: []
}

/**
 * 이전, 현재, 다음 달의 날짜를 42(7x6)개까지 구한다.
 */
export function useCalendar(year?: number, month?: number): IUseCalendar {
  const [thisMonth, setThisMonth] = useState<IMonthDate>(INITIAL_DATA)
  const [prevMonth, setPrevMonth] = useState<IMonthDate>(INITIAL_DATA)
  const [nextMonth, setNextMonth] = useState<IMonthDate>(INITIAL_DATA)

  const monthTitle = MONTH_TITLES[thisMonth.month - 1]

  const setYearMonth = (y: number, m: number) => {
    setThisMonth({
      year: y,
      month: m,
      days: range(1, getDaysInMonth(new Date(y, m - 1)) + 1)
    })
    setPrevMonth(getPrevVisibleDate(y, m))
    setNextMonth(getNextVisibleDate(y, m))
  }

  const goPrevMonth = useCallback(
    () => setYearMonth(prevMonth.year, prevMonth.month),
    [prevMonth]
  )

  const goNextMonth = useCallback(
    () => setYearMonth(nextMonth.year, nextMonth.month),
    [nextMonth]
  )

  useEffect(() => {
    const now = new Date()
    setYearMonth(year || now.getFullYear(), month || now.getMonth() + 1)
    return () => {}
  }, [])

  return {
    prevMonth,
    thisMonth,
    nextMonth,
    setYearMonth,
    monthTitle,
    goPrevMonth,
    goNextMonth
  }
}

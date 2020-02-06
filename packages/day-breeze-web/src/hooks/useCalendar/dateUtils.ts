import range from 'lodash/range'
import { getDaysInMonth, getDay, add, sub } from 'date-fns'

export interface IMonthDate {
  year: number
  month: number
  days: number[]
}

export const MONTH_TITLES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/**
 * 현재 월에 보일 이전 달 날짜
 * @param currentYear 기준 년
 * @param currentMonth 기준 월
 */
export function getPrevVisibleDate(
  currentYear: number,
  currentMonth: number
): IMonthDate {
  const currentDate = new Date(currentYear, currentMonth - 1)
  const currentDayOrder = getDay(currentDate)
  const prevMonth = sub(currentDate, { months: 1 })
  const totalPrevDays = getDaysInMonth(prevMonth)
  const startDay = totalPrevDays - currentDayOrder + 1
  const dayList = range(startDay, totalPrevDays + 1)

  return {
    year: prevMonth.getFullYear(),
    month: prevMonth.getMonth() + 1,
    days: dayList
  }
}

/**
 * 현재 월에 보일 다음 달 날짜
 * @param currentYear 기준 년
 * @param currentMonth 기준 월
 */
export function getNextVisibleDate(
  currentYear: number,
  currentMonth: number
): IMonthDate {
  const MAX_DAYS = 42 // 7x6. 한달에 표시되는 최대 날짜 수
  const currentDate = new Date(currentYear, currentMonth - 1)
  const nextMonth = add(currentDate, { months: 1 })
  const prevMonthDays = getDay(currentDate)
  const currentMonthDays = getDaysInMonth(currentDate)
  const leftDays = MAX_DAYS - prevMonthDays - currentMonthDays
  const dayList = range(1, leftDays + 1)

  return {
    year: nextMonth.getFullYear(),
    month: nextMonth.getMonth() + 1,
    days: dayList
  }
}

import React from 'react'
import isNumber from 'lodash/isNumber'
import cc from 'classnames'

interface ICalDateProps {
  day: number | string
  prevMonth?: boolean
  nextMonth?: boolean
}

export function CalDate({
  day,
  prevMonth = false,
  nextMonth = false
}: ICalDateProps) {
  return (
    <div
      className={cc('calendar-date', {
        'prev-month': prevMonth,
        'next-month': nextMonth
      })}
      data-testid="calendarDate"
    >
      {isNumber(day) ? (
        <button type="button" className="date-item" data-testid="dateItem">
          {day}
        </button>
      ) : (
        day
      )}
    </div>
  )
}

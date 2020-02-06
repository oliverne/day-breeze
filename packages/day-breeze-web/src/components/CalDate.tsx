import React from 'react'
import isNumber from 'lodash/isNumber'

interface ICalDateProps {
  day: number | string
}

export function CalDate({ day }: ICalDateProps) {
  return (
    <div className="calendar-date" data-testid="calendarDate">
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

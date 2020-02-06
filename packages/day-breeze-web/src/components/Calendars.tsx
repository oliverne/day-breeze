import React from 'react'
import { useCalendar } from '/src/hooks/useCalendar/index'
import { CalDate } from '/src/components/CalDate'

export function Calendars() {
  const {
    prevMonth,
    thisMonth,
    nextMonth,
    goPrevMonth,
    goNextMonth,
    monthTitle
  } = useCalendar()

  return (
    <div className="calendar calendar-lg">
      <div className="calendar-nav navbar">
        <button
          onClick={goPrevMonth}
          type="button"
          className="btn btn-action btn-link btn-lg"
        >
          <i className="icon icon-arrow-left" />
        </button>
        <div className="navbar-primary">{`${monthTitle} ${thisMonth.year}`}</div>
        <button
          onClick={goNextMonth}
          type="button"
          className="btn btn-action btn-link btn-lg"
        >
          <i className="icon icon-arrow-right" />
        </button>
      </div>
      <div className="calendar-container">
        <div className="calendar-header">
          <CalDate day="Sun" />
          <CalDate day="Mon" />
          <CalDate day="Tue" />
          <CalDate day="Wed" />
          <CalDate day="Thu" />
          <CalDate day="Fri" />
          <CalDate day="Sat" />
        </div>
        <div className="calendar-body">
          {prevMonth.days.map(day => (
            <CalDate day={day} key={`prev${day}`} prevMonth />
          ))}
          {thisMonth.days.map(day => (
            <CalDate day={day} key={`curr${day}`} />
          ))}
          {nextMonth.days.map(day => (
            <CalDate day={day} key={`next${day}`} nextMonth />
          ))}
        </div>
      </div>
    </div>
  )
}
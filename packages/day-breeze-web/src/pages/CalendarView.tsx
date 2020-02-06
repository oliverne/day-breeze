import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Calendars } from '/src/components/Calendars'

export const CalendarView: React.FC<RouteComponentProps> = () => {
  return <Calendars />
}

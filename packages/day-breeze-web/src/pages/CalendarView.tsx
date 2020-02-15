import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Calendars } from '../components/Calendars'
import { MenuBar } from '../components/MenuBar'

export const CalendarView: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Calendars />
      <MenuBar />
    </>
  )
}

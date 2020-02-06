import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { CalendarView } from './pages/CalendarView'

export function App() {
  return (
    <Router>
      <Home path="/" />
      <CalendarView path="/calendar" />
    </Router>
  )
}

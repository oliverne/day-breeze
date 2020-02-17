import React from 'react'
import { Router } from '@reach/router'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { CalendarView } from './pages/CalendarView'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <CalendarView path="/calendar" />
        <NotFound default />
      </Router>
    </>
  )
}

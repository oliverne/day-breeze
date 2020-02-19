import React from 'react'
import { Router, Location } from '@reach/router'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { CalendarView } from './pages/CalendarView'
import { NewItem } from './pages/NewItem'
import { NotFound } from './pages/NotFound'
import { MenuBar } from './components/MenuBar'

export function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <CalendarView path="/calendar" />
        <NewItem path="/new" />
        <NotFound default />
      </Router>
      <Location>
        {({ location }) => location.pathname !== '/' && <MenuBar />}
      </Location>
    </>
  )
}

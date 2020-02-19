import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from '@reach/router'

import iconCalendar from '../images/031-calendar.svg'
import iconAbout from '../images/033-award.svg'
import iconList from '../images/013-presentation.svg'
import iconWrite from '../images/035-agreement.svg'

const isActive = ({ isCurrent = false }) => {
  return isCurrent ? { className: 'active menu-link' } : {}
}

export function MenuBar() {
  return (
    <div className="container MenuBar">
      <div className="columns">
        <div className="column">
          <Link to="/about" getProps={isActive} className="menu-link">
            <SVG src={iconAbout} className="menu-item" />
            <span className="menu-title">About</span>
          </Link>
        </div>
        <div className="column">
          <Link to="/list" getProps={isActive} className="menu-link">
            <SVG src={iconList} className="menu-item" />
            <span className="menu-title">List</span>
          </Link>
        </div>
        <div className="column">
          <Link to="/calendar" getProps={isActive} className="menu-link">
            <SVG src={iconCalendar} className="menu-item" />
            <span className="menu-title">Calendar</span>
          </Link>
        </div>
        <div className="column">
          <Link to="new" getProps={isActive} className="menu-link">
            <SVG src={iconWrite} className="menu-item" />
            <span className="menu-title">New</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

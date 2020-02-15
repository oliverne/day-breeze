import React from 'react'
import SVG from 'react-inlinesvg'
import iconCalendar from '../images/031-calendar.svg'
import iconAbout from '../images/033-award.svg'
import iconList from '../images/013-presentation.svg'
import iconWrite from '../images/035-agreement.svg'

export function MenuBar() {
  return (
    <div className="container MenuBar">
      <div className="columns">
        <div className="column">
          <SVG src={iconAbout} className="menu-item" />
          <span className="menu-title">About</span>
        </div>
        <div className="column">
          <SVG src={iconCalendar} className="menu-item" />
          <span className="menu-title">Calendar</span>
        </div>
        <div className="column">
          <SVG src={iconList} className="menu-item" />
          <span className="menu-title">List</span>
        </div>
        <div className="column">
          <SVG src={iconWrite} className="menu-item" />
          <span className="menu-title">New</span>
        </div>
      </div>
    </div>
  )
}

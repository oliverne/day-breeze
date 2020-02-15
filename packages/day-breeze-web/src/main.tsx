import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './main.css'

function setVH() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', setVH)
window.addEventListener('DOMContentLoaded', setVH)

ReactDOM.render(<App />, document.getElementById('root'))

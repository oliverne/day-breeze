import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

export const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div className="Home">
      <div className="hero">
        <div className="hero-body">
          <h1>Day Breeze</h1>
          <p>Daily Memo</p>
          <Link to="/calendar">
            <button type="button" className="btn btn-lg login">
              DEMO LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

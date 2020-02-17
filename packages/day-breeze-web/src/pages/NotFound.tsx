import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

export const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <div className="NotFound">
      <div className="empty">
        <div className="empty-icon">
          <i className="icon icon-stop" />
        </div>
        <p className="empty-title h5">404 Not Found</p>
        <p className="empty-subtitle">Sorry, Something is wrong!</p>
        <div className="empty-action">
          <Link to="/calendar" className="btn btn-primary">
            Return
          </Link>
        </div>
      </div>
    </div>
  )
}

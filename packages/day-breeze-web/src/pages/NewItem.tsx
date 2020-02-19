import React from 'react'
import { RouteComponentProps } from '@reach/router'

export const NewItem: React.FC<RouteComponentProps> = () => {
  return (
    <div className="NewItem">
      <div className="content">
        <h1>
          <cite>New Item</cite> 💦
        </h1>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useBrzItem } from '../hooks/useBrzItem'

export const NewItem: React.FC<RouteComponentProps> = () => {
  const { addItem } = useBrzItem()
  const [memo, setMemo] = useState('')

  return (
    <div className="NewItem">
      <div className="header">
        <h3>
          <cite>20, February 2020</cite>
        </h3>

        <div className="Tags">
          <span className="label label-rounded" role="img" aria-label="fine">
            😁
          </span>
          <span className="label label-rounded" role="img" aria-label="wink">
            😉
          </span>
        </div>
      </div>

      <div className="TextForm">
        <div className="form-group">
          <textarea
            onChange={e => {
              setMemo(e.target.value)
            }}
            className="form-input"
            placeholder="How were you today?"
          />
        </div>
      </div>

      <div className="ButtonGroup">
        <button type="button" className="btn btn-link">
          Not yet
        </button>
        <button
          onClick={() => addItem(memo)}
          type="button"
          className="btn btn-primary"
        >
          Done
        </button>
      </div>
    </div>
  )
}

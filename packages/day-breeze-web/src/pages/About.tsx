import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { MenuBar } from '../components/MenuBar'

export const About: React.FC<RouteComponentProps> = () => {
  return (
    <div className="About">
      <div className="content">
        <h1>About</h1>
        <p>
          <cite>Day Breeze</cite> is a demo web-app, which is powered by many
          open source projects and is for personal purpose only.
          <br/>
          <br/>
          For further information{' '}
          <a href="https://github.com/oliverne/day-breeze">
            visit the project source repository.
          </a>
        </p>
        <h3>Copyrights</h3>
        <span>
          Photo by{' '}
          <a href="https://unsplash.com/@simplethemes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Casey Lee
          </a>{' '}
          on{' '}
          <a href="/s/photos/breeze?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
        <br />
        <br />
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/mynamepong"
          title="https://www.flaticon.com/authors/mynamepong"
        >
          mynamepong
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {' '}
          www.flaticon.com
        </a>
      </div>
      <MenuBar />
    </div>
  )
}

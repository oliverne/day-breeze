import React from 'react'
import { RouteComponentProps } from '@reach/router'

export const About: React.FC<RouteComponentProps> = () => {
  return (
    <div className="About">
      <div className="content">
        <h1>
          <cite>Day Breeze</cite> 🍃
        </h1>
        <p>
          ...is a demo web-app, which is powered by many open-source projects
          and built for personal purposes only.
        </p>
        <h3>Who&#39;s made by?</h3>
        <p>
          Hi, I&#39;m <cite>Oliver</cite>, and also which was my best cat&#39;s
          name. I work as a front-end engineer for a small company in Korea.
        </p>
        <p>
          If you have any suggestions or issues, please feel free to{' '}
          <a href="https://github.com/oliverne/day-breeze">
            visit my project source repository.
          </a>
        </p>
        <h4>Licenses</h4>
        <p>
          Photo by{' '}
          <a href="https://unsplash.com/@rudyirudyk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Daria Rudyk
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/calendar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
          <br />
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/mynamepong"
            title="mynamepong"
          >
            mynamepong
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </p>
      </div>
    </div>
  )
}

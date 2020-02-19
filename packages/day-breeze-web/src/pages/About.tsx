import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { MenuBar } from '../components/MenuBar'

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
        <h4>Who&#39;s made by?</h4>
        <p>
          Hi, I&#39;m <cite>Oliver</cite>, and also which was my best cat&#39;s name. I work
          as a front-end engineer for a small company in Korea.
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
          <a href="https://unsplash.com/@simplethemes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Casey Lee
          </a>{' '}
          on{' '}
          <a href="/s/photos/breeze?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
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
        </p>
      </div>
      <MenuBar />
    </div>
  )
}

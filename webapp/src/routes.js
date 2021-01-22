import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import Dashboard from './pages/Dashboard/Dashboard'
import Chart from './pages/Chart/Chart'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import TransEdit from './pages/TransEdit/TransEdit'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle} style={{ backgroundColor: 'orange' }}>
          <ul >
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/chart'>Chart</Link>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route component={Dashboard} exact path='/' />
          <Route component={Users} exact path='/users' />
          <Route component={Chart} exact path='/chart' />
          <Route component={UserProfile} exact path='/user/:id' />
          <Route component={TransEdit} exact path='/transaction-edit/:id' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
    background: #131419;
    color: #F3F1F1;
    font-family: 'Lato', sans-serif;
`

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
`

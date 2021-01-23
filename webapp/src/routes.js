import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { editLinkStyle } from '../src/globalStyles'
import Dashboard from './pages/Dashboard/Dashboard'
import Chart from './pages/Chart/Chart'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import TransEdit from './pages/TransEdit/TransEdit'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link css={editLinkStyle} to='/'>Dashboard</Link>
            </li>
            <li>
              <Link css={editLinkStyle} to='/users'>Users</Link>
            </li>
            <li>
              <Link css={editLinkStyle} to='/chart'>Chart</Link>
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
    background: #4d5166;
    color: #F3F1F1;
    font-family: 'Lato', sans-serif;

    th {
      text-align: center;
    }

    td {
      text-align: center;
      padding: 12px;
    }
`

const navStyle = css`
  grid-row: 1;
  padding: 40px;
  font-size: 20px;

    li::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #03a9f4;
        transition: width .3s;
        margin-top: 4px;
        
    }

    li:hover {
        color: #03a9f4;
        opacity: 1;
    }

    li:hover::after {
        width: 100%;
    }

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 35px;
  }
`

const contentStyle = css`
  grid-row: 2;
`

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
            <li>
              <label htmlFor='cb'>Roman Numerals</label>
              <input css={checkboxStyle} id='cb' type='checkbox' />
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

const checkboxStyle = css`
  &:before {
    transition-timing-function: cubic-bezier(.075, .820, .165, 1);
    border: 2px solid;
    border-radius: 0;
    background-color: white;
    border-color: transparent;
    box-sizing: border-box;
    color: #3acfb6;
    content: close-quote;
    display: inline-block;
    height: 12px;
    outline: 2px solid #3acfb6;
    transition-duration: .5s;
    transition-property: background-color, border-color;
    width: 12px;
  }

  &:checked:before {
    background-color: #3acfb6;
    border-color: white;
  }
`

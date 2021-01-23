import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

export default function Layout (props) {
  return (
    <div css={containerStyle}>
      <div css={wrapperStyle}>
        {props.children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #4d5166;
`

const wrapperStyle = css`
  position: relative;
  width: 80%;
  padding: 40px 40px 60px;
  background: #4d5166;
  border-radius: 10px;
  text-align: left;
  box-shadow: 12px 12px 30px #2b2d39,
             -12px -12px 30px #6f7593;
`

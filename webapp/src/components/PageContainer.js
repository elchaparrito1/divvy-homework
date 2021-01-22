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
  background-color: #131419;
`

const wrapperStyle = css`
  position: relative;
  width: 80%;
  padding: 40px 40px 60px;
  background: #131419;
  border-radius: 10px;
  text-align: center;
  box-shadow: -5px -5px 10px rgba(255,255,255,0.05),
              5px 5px 15px rgba(0,0,0,0.5);
`

import React, { Fragment } from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

export default function RomanToggleBtn (props) {
  return (
    <Fragment>
      <label htmlFor='cb'>Roman Numerals
        <input
          checked={props.toggle}
          css={checkboxStyle}
          id='cb'
          onChange={props.handleToggle}
          style={{ backgroundColor: props.toggle ? '#3acfb6' : 'white' }}
          type='checkbox'
        />
      </label>
    </Fragment>
  )
}

RomanToggleBtn.propTypes = {
  toggle: PropTypes.bool,
  handleToggle: PropTypes.func
}

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

  &:hover {
    cursor: pointer;
  }

  &:checked:before {
    background-color: #3acfb6;
    border-color: white;
  }

}
`

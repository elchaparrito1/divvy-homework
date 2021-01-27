import React, { Fragment } from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { row } from '../globalStyles'

export default function RomanToggleBtn (props) {
  return (
    <Fragment>
      <div css={row}>
        <label htmlFor='cb'>Roman Numerals:
          <input
            checked={props.toggle}
            css={checkboxStyle}
            id='cb'
            onChange={props.handleRomanToggle}
            style={{ backgroundColor: props.toggle ? '#3acfb6' : 'white' }}
            type='checkbox'
          />
        </label>
      </div>
    </Fragment>
  )
}

RomanToggleBtn.propTypes = {
  toggle: PropTypes.bool,
  handleRomanToggle: PropTypes.func
}

const checkboxStyle = css`
  &:before {
    transition-timing-function: cubic-bezier(.075, .820, .165, 1);
    border: 2px solid;
    border-radius: 0;
    background-color: #4d5166;
    border-color: transparent;
    box-sizing: border-box;
    color: #4d5166;
    content: close-quote;
    display: inline-block;
    height: 12px;
    outline: 2px solid #03a9f4;
    transition-duration: .5s;
    transition-property: background-color, border-color;
    width: 12px;
  }

  &:hover {
    cursor: pointer;
  }

  &:checked:before {
    background-color: #03a9f4;
    border-color: #4d5166;
  }
`

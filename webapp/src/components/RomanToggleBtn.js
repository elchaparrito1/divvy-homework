import React, { Fragment, useContext } from 'react'
import { css } from '@emotion/core'
import RomanContext from './RomanContext'

export default function RomanToggleBtn () {
  const { setToggle } = useContext(RomanContext)
  const { toggle } = useContext(RomanContext)

  const handleRomanToggle = () => {
    setToggle(!toggle)
  }
  // console.log(toggle)

  return (
    <Fragment>
      <label htmlFor='cb'>Roman Numerals
        <input id='cb' onChange={handleRomanToggle} type='checkbox' />
      </label>
    </Fragment>
  )
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

  &[type="checkbox"]:checked {
  background: #D9534F -19px top no-repeat;
}
`

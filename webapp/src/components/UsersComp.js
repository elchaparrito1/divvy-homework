/* eslint-disable jsx-a11y/no-onchange */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { submitStyle } from '../globalStyles'
import Fade from 'react-reveal/Fade'

export default function UsersComp (props) {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Edit</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((transData) => {
            return (
              <tr key={transData.id}>
                <Fade left>
                  <td><button css={submitStyle} onClick={(e) => props.handleToggle(e.target.value)} type='button' value={transData.id}>Edit</button></td>
                  <td>{transData.id}</td>
                  <td>{transData.firstName}</td>
                  <td>{transData.lastName}</td>
                  <td>{transData.dob}</td>
                </Fade>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

UsersComp.propTypes = {
  data: PropTypes.array,
  handleToggle: PropTypes.func
}

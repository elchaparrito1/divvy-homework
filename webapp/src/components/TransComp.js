/* eslint-disable jsx-a11y/no-onchange */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Roman from '../helpers/Roman'

export default function TransComp (props) {
  // console.log(transInputs)

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Edit</th>
            <th>ID</th>
            <th>User ID</th>
            <th>Description</th>
            <th>Merchant ID</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((transData) => {
            return (
              <tr key={transData.id}>
                <td><Link to={`/transaction-edit/${transData.id}`}>Edit</Link></td>
                <td>{transData.id}</td>
                <td>{Roman(transData.userId)}</td>
                <td>{transData.descrip}</td>
                <td>{transData.merchantId}</td>
                <td>{transData.debit ? `X` : ''}</td>
                <td>{transData.credit ? `X` : ''}</td>
                <td>{Roman(transData.amount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

TransComp.propTypes = {
  data: PropTypes.array
}

/* eslint-disable jsx-a11y/no-onchange */
import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Roman from '../helpers/Roman'
import RomanContext from './RomanContext'
import { editLinkStyle } from '../globalStyles'
import cardImg from '../images/cardImg.png'

export default function TransComp (props) {
  // console.log(transInputs)
  const { toggle } = useContext(RomanContext)

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
                <td><Link css={editLinkStyle} to={`/transaction-edit/${transData.id}`}>Edit</Link></td>
                <td>{toggle ? Roman(transData.id) : transData.id}</td>
                <td>{toggle ? Roman(transData.userId) : transData.userId}</td>
                <td>{transData.descrip}</td>
                <td>{toggle ? Roman(transData.merchantId) : transData.merchantId}</td>
                <td>{transData.debit ? <img alt='credit card icon for debit' src={cardImg} width='20px' /> : ''}</td>
                <td>{transData.credit ? <img alt='credit card icon for credit' src={cardImg} width='20px' /> : ''}</td>
                <td>{toggle ? Roman(transData.amount) : transData.amount}</td>
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

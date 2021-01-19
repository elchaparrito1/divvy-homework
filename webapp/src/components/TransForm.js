/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

const users = [
  {
    id: '34'
  },
  {
    id: '35'
  },
  {
    id: '36'
  }
]

const merchants = [
  {
    id: '23433F'
  },
  {
    id: '23499D'
  }
]

export default function TransForm (props) {
  const initialValue = {
    id: '',
    userId: users[0].id,
    descrip: '',
    merchantId: merchants[0].id,
    debit: false,
    credit: false,
    amount: 0
  }

  const [transInputs, setTrans] = useState(initialValue)
  const [creditDebit, setCreditDebit] = useState('Credit')
  const [openTrans, setOpenTrans] = useState(false)

  const returnUsers = () => {
    return (
      <select name={transInputs.userId}
        onChange={e => setTrans({ ...transInputs, userId: e.currentTarget.value })}
        value={transInputs.userId}>
        {users.map((user) => {
          const val = user.id
          return <option key={val} value={val}>{val}</option>
        })}
      </select>
    )
  }

  const returnMerchants = () => {
    return (
      <select name={transInputs.merchantId}
        onChange={e => setTrans({ ...transInputs, merchantId: e.currentTarget.value })}
        value={transInputs.merchantId}
      >
        {merchants.map((merchant) => {
          const val = merchant.id
          return <option key={val} value={val}>{val}</option>
        })}
      </select>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdate(transInputs)
    setTrans(initialValue)
    setOpenTrans(false)
  }

  // console.log(transInputs)

  return (
    <Fragment>
      <button onClick={() => setOpenTrans(true)}>Transaction+</button>
      {openTrans && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              User
              {returnUsers()}
            </label>
            <label>
              Description:
              <textarea name='descrip'
                onChange={e => setTrans({ ...transInputs, descrip: e.currentTarget.value })}
                value={transInputs.descrip}
              />
            </label>
            <label>
              Merchant
              {returnMerchants()}
            </label>
            <label>
              Credit/Debit
              <select name={creditDebit}
                onChange={e => setCreditDebit(e.currentTarget.value)}
                value={creditDebit}
              >
                <option value='Credit'>Credit</option>
                <option value='Debit'>Debit</option>
              </select>
            </label>
            <label>
              Amount
              <input name='amount'
                onChange={e => setTrans({ ...transInputs, amount: parseInt(e.currentTarget.value) })}
                type='number' value={transInputs.amount}
              />
            </label>
            <input type='submit' value='Submit' />
          </form>
          <button onClick={() => setOpenTrans(false)}>Close</button>
        </div>
      )}
    </Fragment>
  )
}

TransForm.propTypes = {
  handleUpdate: PropTypes.func
}

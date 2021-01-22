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
    id: '23433'
  },
  {
    id: '23499'
  }
]

export default function TransForm (props) {
  const initialValue = {
    id: '',
    userId: users[0].id,
    descrip: '',
    merchantId: merchants[0].id,
    debit: false,
    credit: true,
    amount: 0
  }

  const [transInputs, setTrans] = useState(initialValue)
  const [openTrans, setOpenTrans] = useState(false)

  // function runs on load to populate users from db
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

  // function runs on load to populate merchants from db
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

  // handles submission of created transaction - state gets handled by parent component
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdate(transInputs)
    setTrans(initialValue)
    setOpenTrans(false)
  }

  const handleMOP = (e) => {
    e.target.value === 'Credit'
      ? setTrans({ ...transInputs, credit: true, debit: false })
      : setTrans({ ...transInputs, credit: false, debit: true })
  }

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
              <select name='mop'
                onChange={handleMOP}
              >
                <option value='credit'>Credit</option>
                <option value='debit'>Debit</option>
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

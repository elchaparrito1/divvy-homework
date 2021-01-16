/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const dummyData = [
  {
    id: '123',
    userId: '34',
    descrip: 'I bought sum butta!',
    merchantId: '23499D',
    debit: false,
    credit: true,
    amount: 34
  },
  {
    id: '124',
    userId: '34',
    descrip: 'I bought a boat!',
    merchantId: '23433F',
    debit: true,
    credit: false,
    amount: 340000
  },
  {
    id: '125',
    userId: '36',
    descrip: 'I bought a trailer for the boat!',
    merchantId: '23433F',
    debit: false,
    credit: true,
    amount: 15000
  }
]

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

export default function TransComp () {
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
  const [openTrans, setOpenTrans] = useState(false)
  const [creditDebit, setCreditDebit] = useState('Credit')
  const [data, setData] = useState(dummyData)

  const paintData = () => {
    return data.map((transData) => {
      return (
        <tr key={transData.id}>
          <td><Link to={`/transaction-edit/${transData.id}`}>Edit</Link></td>
          <td>{transData.id}</td>
          <td>{transData.userId}</td>
          <td>{transData.descrip}</td>
          <td>{transData.merchantId}</td>
          <td>{transData.debit ? `X` : ''}</td>
          <td>{transData.credit ? `X` : ''}</td>
          <td>{transData.amount}</td>
        </tr>
      )
    })
  }

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
    setData(data => [...data, transInputs])
    setTrans(initialValue)
    setOpenTrans(false)
  }

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
          {paintData()}
        </tbody>
      </table>
      <div>
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
      </div>
    </Fragment>
  )
}

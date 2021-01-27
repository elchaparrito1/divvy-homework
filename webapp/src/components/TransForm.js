/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { inputStyle, submitStyle, column, centerRow } from '../globalStyles'
import { dummyTransData } from '../dummyData'
import removeDups from '../helpers/removeDups'

const users = removeDups(dummyTransData.map(({ userId }) => userId))
const categories = removeDups(dummyTransData.map(({ category }) => category))

export default function TransForm (props) {
  const initialValue = {
    id: dummyTransData[dummyTransData.length - 1].id + 1,
    userId: users[0],
    descrip: '',
    category: categories[0],
    debit: false,
    credit: true,
    amount: 0
  }

  const [transInputs, setTrans] = useState(initialValue)
  const [openTrans, setOpenTrans] = useState(false)

  // function runs on load to populate users from db
  const returnUsers = () => {
    return (
      <select css={selectStyle}
        name={transInputs.userId}
        onChange={e => setTrans({ ...transInputs, userId: e.currentTarget.value })}
        value={transInputs.userId}>
        {users.map((user) => {
          const val = user
          return <option key={val} value={val}>{val}</option>
        })}
      </select>
    )
  }

  // function runs on load to populate merchants from db
  const returnCategories = () => {
    return (
      <select css={selectStyle}
        name={transInputs.category}
        onChange={e => setTrans({ ...transInputs, category: e.currentTarget.value })}
        value={transInputs.category}
      >
        {categories.map((category) => {
          const val = category
          return <option key={val} value={val}>{val}</option>
        })}
      </select>
    )
  }

  // handles submission of created transaction - state gets handled by parent component
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdate(transInputs)
    setTrans({ ...initialValue, id: transInputs.id + 1 })
    setOpenTrans(false)
  }

  const handleMOP = (e) => {
    e.target.value === 'Credit'
      ? setTrans({ ...transInputs, credit: true, debit: false })
      : setTrans({ ...transInputs, credit: false, debit: true })
  }

  return (
    <Fragment>
      <div style={{ marginTop: '40px' }}>
        {!openTrans
          ? <button css={submitStyle} onClick={() => setOpenTrans(true)}>Transaction+</button>
          : (
            <div css={formStyles}>
              <form onSubmit={handleSubmit}>
                <div css={centerRow}>
                  <div css={column}>
                ID:
                    <span>{transInputs.id}</span>
                  </div>
                  <div css={column}>
                    <label>
                User:
                      {returnUsers()}
                    </label>
                  </div>
                  <div css={column}>
                    <label>
                Description:
                      <textarea css={inputStyle}
                        name='descrip'
                        onChange={e => setTrans({ ...transInputs, descrip: e.currentTarget.value })}
                        value={transInputs.descrip}
                      />
                    </label>
                  </div>
                </div>
                <div css={centerRow}>
                  <div css={column}>
                    <label>
                Merchant:
                      {returnCategories()}
                    </label>
                  </div>
                  <div css={column}>
                    <label>
                Credit/Debit:
                      <select css={selectStyle}
                        name='mop'
                        onChange={handleMOP}
                      >
                        <option value='credit'>Credit</option>
                        <option value='debit'>Debit</option>
                      </select>
                    </label>
                  </div>
                  <div css={column}>
                    <label>
                Amount:
                      <input css={inputStyle}
                        name='amount'
                        onChange={e => setTrans({ ...transInputs, amount: parseInt(e.currentTarget.value) })}
                        type='number' value={transInputs.amount}
                      />
                    </label>
                  </div>
                </div>
                <div css={centerRow}>
                  <div css={column}>
                    <input css={submitStyle} type='submit' value='Submit' />
                  </div>
                  <div css={column}>
                    <button css={submitStyle} onSubmit={() => setOpenTrans(false)}>Close</button>
                  </div>
                </div>
              </form>
            </div>
          )
        }
      </div>
    </Fragment>
  )
}

TransForm.propTypes = {
  handleUpdate: PropTypes.func
}

const formStyles = css`
  input, label {
    display: block;
  }

  margin-top: 40px;
`

const selectStyle = css`
  display: inline-block;
  height: 30px;
  width: 100px;
  padding: 2px 10px 2px 2px;
  outline: none;
  color: #74646e;
  border-radius: 4px;
  box-shadow: inset 4px 4px 10px #ddd8dc;
  background: #fff;
`

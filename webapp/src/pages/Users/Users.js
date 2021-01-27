import React, { Fragment, useState, useRef } from 'react'
import PageContainer from '../../components/PageContainer'
import UsersComp from '../../components/UsersComp'
import { css } from '@emotion/core'
import { dummyUserData } from '../../dummyData'

import { titleStyle, submitStyle, inputStyle, row, column } from '../../globalStyles'

export default function Users () {
  const [data, setData] = useState(dummyUserData)
  const [openUser, setOpenUser] = useState(false)
  const scrollToComp = useRef(null)
  const [userEdit, setUserEdit] = useState({
    id: null,
    firstName: '',
    lastname: '',
    dob: ''
  })

  // function to scroll to Usersform on button click
  const scrollToBottom = () => {
    scrollToComp.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleUserInput = (e) => {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value
    })
  }

  const getUser = (val) => {
    let dataObj = data
    return dataObj.filter(obj => obj.id === parseInt(val))
  }

  const handleUserEditOpen = (val) => {
    // go grab user obj based on val
    let user = getUser(val)
    setUserEdit({
      id: user[0].id,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      dob: user[0].dob
    })
    setOpenUser(true)
    scrollToBottom()
  }

  // function to handle the update to a User's information
  const handleUserInfoUpdate = (e) => {
    e.preventDefault()
    let newData = data
    newData = newData.map(u => u.id === userEdit.id ? userEdit : u)
    setData(newData)
    setOpenUser(false)
  }

  return (
    <Fragment>
      <PageContainer>
        <h1 css={titleStyle}>USERS LIST</h1>
        <UsersComp
          data={data}
          handleUserEditOpen={handleUserEditOpen}
        />
        <div ref={scrollToComp}>
          {openUser && (
            <div css={formStyles}>
              <form onSubmit={handleUserInfoUpdate}>
                <div css={row} style={{ marginBottom: '30px' }}>
                  <div css={column}>
                    <label>
                    USER ID:
                      <input
                        css={inputStyle}
                        name='id'
                        onChange={handleUserInput}
                        readOnly
                        style={{ color: '#FF9800', marginBottom: '-5px' }}
                        type='text'
                        value={userEdit.id}
                      />
                      <span css={spanStyle}>READ-ONLY</span>
                    </label>
                  </div>
                  <div css={column} >
                    <label>
                    DOB:
                      <input
                        css={inputStyle}
                        name='dob'
                        onChange={handleUserInput}
                        style={{ marginBottom: '-5px' }}
                        type='text'
                        value={userEdit.dob}
                      />
                      <span css={spanStyle}>YYYY-MM-DD</span>
                    </label>
                  </div>
                </div>
                <div css={row}>
                  <div css={column}>
                    <label>
                    FIRST NAME:
                      <input
                        css={inputStyle}
                        name='firstName'
                        onChange={handleUserInput}
                        type='text'
                        value={userEdit.firstName}
                      />
                    </label>
                  </div>
                  <div css={column}>
                    <label>
                    LAST NAME:
                      <input
                        css={inputStyle}
                        name='lastName'
                        onChange={handleUserInput}
                        type='text'
                        value={userEdit.lastName}
                      />
                    </label>
                  </div>
                </div>
                <div css={row}>
                  <div css={column}>
                    <input css={submitStyle} type='submit' value='Submit' />
                  </div>
                  <div css={column}>
                    <button css={submitStyle} onSubmit={() => setOpenUser(false)}>Close</button>
                  </div>
                </div>
              </form>
            </div>
          )
          }
        </div>
      </PageContainer>
    </Fragment>
  )
}

const formStyles = css`
  input, label {
    display: block;
  }

  margin-top: 40px;
`

const spanStyle = css`
  font-size: 12px;
`

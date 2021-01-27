import React, { Fragment, useState, useRef } from 'react'
import PageContainer from '../../components/PageContainer'
import UserComp from '../../components/UsersComp'
import { css } from '@emotion/core'
import { dummyUserData } from '../../dummyData'

import { titleStyle, submitStyle, inputStyle } from '../../globalStyles'

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

  // function to scroll to userform on button click
  const scrollToBottom = () => {
    scrollToComp.current.scrollIntoView({ behavior: 'smooth' })
  }

  // function to edit User information
  const handleUpdate = (e) => {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value
    })
  }

  // function to get user
  const getUser = (val) => {
    let dataObj = data
    return dataObj.filter(obj => obj.id === parseInt(val))
  }

  // function to open/close User edit
  const handleToggle = (val) => {
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

  const handleSubmit = (e) => {
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
        <UserComp
          data={data}
          handleToggle={handleToggle}
        />
        <div ref={scrollToComp}>
          {openUser && (
            <div css={formStyles}>
              <form onSubmit={handleSubmit}>
                <div css={row} style={{ marginBottom: '30px' }}>
                  <div css={column}>
                    <label>
                    USER ID:
                      <input
                        css={inputStyle}
                        name='id'
                        onChange={handleUpdate}
                        readOnly
                        style={{ color: 'orange', marginBottom: '-5px' }}
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
                        onChange={handleUpdate}
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
                        onChange={handleUpdate}
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
                        onChange={handleUpdate}
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
                    <button css={submitStyle} onClick={() => setOpenUser(false)}>Close</button>
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

const row = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: left;
`

const column = css`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 0 0 5%;
  margin: 0 15px;
  align-self: center;
  text-align: center;
`

const spanStyle = css`
  font-size: 12px;
`

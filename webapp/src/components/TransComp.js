/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import Roman from '../helpers/Roman'
import RomanContext from './RomanContext'
import { centerRow } from '../globalStyles'
import cardImg from '../images/cardImg.png'
import Pagination from './Pagination'
import Fade from 'react-reveal/Fade'
import { css } from '@emotion/core'

export default function TransComp (props) {
  const { toggle } = useContext(RomanContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [transPerPage] = useState(5)

  // Get current transactions
  const indexOfLastTrans = currentPage * transPerPage
  const indexOfFirstTrans = indexOfLastTrans - transPerPage
  const currentTrans = props.data.slice(indexOfFirstTrans, indexOfLastTrans)

  // Function to paginate between transactions
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Fragment>
      <div css={centerRow}>
        <table style={{ marginTop: '40px' }}>
          <thead>
            <tr>
              <th />
              <th>ID</th>
              <th>User ID</th>
              <th>Description</th>
              <th>Category</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentTrans.map((transData) => {
              return (
                <tr key={transData.id}>
                  <Fade right>
                    <td><button css={deleteButton} onClick={(e) => props.handleDelete(e.target.value)} value={transData.id}>Remove</button></td>
                    <td>{toggle ? Roman(transData.id) : transData.id}</td>
                    <td>{toggle ? Roman(transData.userId) : transData.userId}</td>
                    <td>{transData.descrip}</td>
                    <td>{transData.category}</td>
                    <td>{transData.debit ? <img alt='credit card icon for debit' src={cardImg} width='20px' /> : ''}</td>
                    <td>{transData.credit ? <img alt='credit card icon for credit' src={cardImg} width='20px' /> : ''}</td>
                    <td>{toggle ? Roman(transData.amount) : transData.amount}</td>
                  </Fade>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        paginate={paginate}
        totalTrans={props.data.length}
        transPerPage={transPerPage}
      />
    </Fragment>
  )
}

TransComp.propTypes = {
  data: PropTypes.array,
  handleDelete: PropTypes.func
}

const deleteButton = css`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  font-size: 16px;
  color: #03a9f4;

&::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #03a9f4;
      transition: width .3s;
      margin-top: 4px;
      
  }

  &:hover {
      color: #03a9f4;
      opacity: 1;
      cursor: pointer;
  }

  &:hover::after {
      width: 100%;
  }

&:link {
text-decoration: none;
}
`

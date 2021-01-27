import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { column, submitStyle, centerRow } from '../globalStyles'

export default function Pagination ({ transPerPage, totalTrans, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalTrans / transPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Fragment>
      <nav>
        <div css={centerRow}>
          {pageNumbers.map((number) => {
            return (
              <div css={column} key={number}>
                <button css={submitStyle} onClick={() => paginate(number)}>
                  {number}
                </button>
              </div>
            )
          })}
        </div>
      </nav>
    </Fragment>
  )
}

Pagination.propTypes = {
  transPerPage: PropTypes.number,
  totalTrans: PropTypes.number,
  paginate: PropTypes.func
}

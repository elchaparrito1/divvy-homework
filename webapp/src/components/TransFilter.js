/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

export default function TransFilter (props) {
  // console.log(transInputs)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  // function to handle filter functionality and edit state of parent component
  const handleFilter = (e) => {
    e.preventDefault()
    const filteredData = props.data.filter(obj => obj.amount >= min && obj.amount <= max)
    props.handleFilter(filteredData)
  }

  // function to reset filter parameters
  const handleReset = () => {
    props.handleReset()
  }

  return (
    <Fragment>
      { props.filtered
        ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          <form onSubmit={handleFilter}>
            <label>
          Min
              <input name='min'
                onChange={e => setMin(e.target.value)}
                type='number'
                value={min} />
            </label>
            <label>
          Max
              <input name='max'
                onChange={e => setMax(e.target.value)}
                type='number'
                value={max} />
            </label>
            <input type='submit' value='Filter' />
          </form>
        )}
    </Fragment>
  )
}

TransFilter.propTypes = {
  handleFilter: PropTypes.func,
  handleReset: PropTypes.func,
  data: PropTypes.array,
  filtered: PropTypes.bool
}

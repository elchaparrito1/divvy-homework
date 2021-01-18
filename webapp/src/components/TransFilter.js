/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

export default function TransFilter (props) {
  // console.log(transInputs)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const handleFilter = (e) => {
    e.preventDefault()
    const filteredData = props.data.filter(obj => obj.amount >= min && obj.amount <= max)
    console.log(filteredData)
    props.onChange(filteredData)
  }

  console.log(min, max)

  return (
    <Fragment>
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
    </Fragment>
  )
}

TransFilter.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.array
}

/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { submitStyle, inputStyle, centerRow } from '../globalStyles'

export default function TransFilter (props) {
  // console.log(transInputs)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [err, setErr] = useState('')

  const handleFilter = (e) => {
    e.preventDefault()
    if (min <= 0 && max <= 0) {
      setErr('Please select a valid range')
    } else {
      const filteredData = props.data.filter(obj => obj.amount >= min && obj.amount <= max)
      if (filteredData.length <= 0) {
        setErr('No filtered data to return')
      } else {
        props.handleFilter(filteredData)
      }
    }
  }

  const handleReset = () => {
    setMin(0)
    setMax(0)
    setErr('')
    props.handleFilterReset()
  }

  return (
    <Fragment>
      { props.filtered
        ? (
          <div css={centerRow}>
            <button css={submitStyle} onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <div css={centerRow}>
            <div>
              <form onSubmit={handleFilter}>
                <label>
          Min
                  <input css={inputStyle}
                    name='min'
                    onChange={e => setMin(e.target.value)}
                    type='number'
                    value={min} />
                </label>
                <label>
          Max
                  <input css={inputStyle}
                    name='max'
                    onChange={e => setMax(e.target.value)}
                    type='number'
                    value={max} />
                </label>
                <input css={submitStyle} type='submit' value='Filter' />
              </form>
              {err === 'Please select a valid range' &&
              <p style={{ color: 'red', marginTop: '-10px' }}>{err}</p>
              }
              {err === 'No filtered data to return' &&
              <p style={{ color: 'red', marginTop: '-10px' }}>{err}</p>
              }
            </div>
          </div>
        )}
    </Fragment>
  )
}

TransFilter.propTypes = {
  handleFilter: PropTypes.func,
  handleFilterReset: PropTypes.func,
  data: PropTypes.array,
  filtered: PropTypes.bool
}

import React, { useState, Fragment } from 'react'
import PageContainer from '../../components/PageContainer'
import TransComp from '../../components/TransComp'
import TransForm from '../../components/TransForm'
import TransFilter from '../../components/TransFilter'
import RomanToggleBtn from '../../components/RomanToggleBtn'
import RomanContext from '../../components/RomanContext'
import { titleStyle } from '../../globalStyles'
import { dummyTransData } from '../../../src/dummyData'

export default function Dashboard () {
  const [data, setData] = useState(dummyTransData)
  const [filtered, setFiltered] = useState(false)
  const [toggle, setToggle] = useState(false)

  // function to add new transaction to list of total expenditures
  const handleUpdate = (newValue) => {
    setData(data => [...data, newValue])
  }

  // function to filter transactions based on min and max amounts
  const handleFilter = (newData) => {
    setData(newData)
    setFiltered(true)
  }

  // function to reset filter
  const handleReset = () => {
    setData(dummyTransData)
    setFiltered(false)
  }

  // function to handle roman numeral button toggle in RomanToggleBtn component
  const handleToggle = () => {
    setToggle(!toggle)
  }

  // function to remove transaction from table
  const handleDelete = (val) => {
    console.log(val)
    let deleteData = data
    let newData = deleteData.filter((obj) => obj.id !== parseInt(val))
    console.log(newData)
    setData(newData)
  }

  return (
    <Fragment>
      <PageContainer>
        <h1 css={titleStyle}>EXPENSE REPORT</h1>
        <RomanContext.Provider value={{ toggle }}>
          <RomanToggleBtn handleToggle={handleToggle} toggle={toggle} />
          <TransFilter data={data} filtered={filtered} handleFilter={handleFilter} handleReset={handleReset} />
          <TransComp data={data} handleDelete={handleDelete} />
          <TransForm handleUpdate={handleUpdate} />
        </RomanContext.Provider>
      </PageContainer>
    </Fragment>
  )
}

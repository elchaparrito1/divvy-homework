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

  const handleNewTransaction = (newValue) => {
    setData(data => [...data, newValue])
  }

  const handleFilter = (newData) => {
    setData(newData)
    setFiltered(true)
  }

  const handleFilterReset = () => {
    setData(dummyTransData)
    setFiltered(false)
  }

  const handleRomanToggle = () => {
    setToggle(!toggle)
  }

  const handleTransDelete = (val) => {
    let deleteData = data
    let newData = deleteData.filter((obj) => obj.id !== parseInt(val))
    setData(newData)
  }

  return (
    <Fragment>
      <PageContainer>
        <h1 css={titleStyle}>EXPENSE REPORT</h1>
        <RomanContext.Provider value={{ toggle }}>
          <RomanToggleBtn handleRomanToggle={handleRomanToggle} toggle={toggle} />
          <TransFilter data={data} filtered={filtered} handleFilter={handleFilter} handleFilterReset={handleFilterReset} />
          <TransComp data={data} handleTransDelete={handleTransDelete} />
          <TransForm handleNewTransaction={handleNewTransaction} />
        </RomanContext.Provider>
      </PageContainer>
    </Fragment>
  )
}

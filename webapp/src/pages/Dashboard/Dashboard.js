import React, { useState, Fragment } from 'react'
import Layout from '../../components/Layout'
// import styled from '@emotion/styled'
import TransComp from '../../components/TransComp'
import TransForm from '../../components/TransForm'
import TransFilter from '../../components/TransFilter'

const dummyData = [
  {
    id: '123',
    userId: '34',
    descrip: 'I bought sum butta!',
    merchantId: '23499D',
    debit: false,
    credit: true,
    amount: 34
  },
  {
    id: '124',
    userId: '34',
    descrip: 'I bought a boat!',
    merchantId: '23433F',
    debit: true,
    credit: false,
    amount: 3400
  },
  {
    id: '125',
    userId: '36',
    descrip: 'I bought a trailer for the boat!',
    merchantId: '23433F',
    debit: false,
    credit: true,
    amount: 1500
  },
  {
    id: '126',
    userId: '34',
    descrip: 'Skis!',
    merchantId: '23499D',
    debit: false,
    credit: true,
    amount: 10000
  },
  {
    id: '127',
    userId: '36',
    descrip: 'Liquor at office party',
    merchantId: '23499D',
    debit: false,
    credit: true,
    amount: 340
  },
  {
    id: '128',
    userId: '35',
    descrip: 'Backstreet Boys tickets',
    merchantId: '23499D',
    debit: false,
    credit: true,
    amount: 1000
  }
]

export default function Dashboard () {
  const [data, setData] = useState(dummyData)
  const [filtered, setFiltered] = useState(false)

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
    setData(dummyData)
    setFiltered(false)
  }

  return (
    <Fragment>
      <Layout>
        <h1>Expense Report</h1>
        <TransFilter data={data} filtered={filtered} handleFilter={handleFilter} handleReset={handleReset} />
        <TransComp data={data} />
        <TransForm handleUpdate={handleUpdate} />
      </Layout>
    </Fragment>
  )
}

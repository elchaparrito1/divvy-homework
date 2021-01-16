import React, { Fragment } from 'react'
import Layout from '../../components/Layout'
// import styled from '@emotion/styled'
import TransComp from '../../components/TransComp'

export default function Dashboard () {
  return (
    <Fragment>
      <Layout>
        <h1>Expense Report</h1>
        <TransComp />
      </Layout>
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import PageContainer from '../../components/PageContainer'
import DoughnutChart from '../../components/DoughnutChart'
import { titleStyle } from '../../globalStyles'

export default function Chart () {
  return (
    <Fragment>
      <PageContainer>
        <h1 css={titleStyle}>EXPENSES BASED ON CATEGORIES</h1>
        <DoughnutChart />
      </PageContainer>
    </Fragment>
  )
}

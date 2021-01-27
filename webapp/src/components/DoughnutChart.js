import React, { Fragment } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { centerRow } from '../globalStyles'
import categoryTotals from '../helpers/categoryTotals'
import { dummyTransData } from '../dummyData'
import { css } from '@emotion/core'

const categories = ['Travel', 'Office Supplies', 'Vendor', 'Misc', 'Fees']

// function to obtain category expenditures from dummy data
const mountData = () => {
  let result = 0
  const newData = []
  categories.forEach((label) => {
    result = categoryTotals(dummyTransData, label)
    newData.push(result)
  })
  return newData
}

const chartData = {
  labels: categories,
  datasets: [
    {
      backgroundColor: [
        '#F5FAFD',
        '#FF9800',
        '#03A9F4',
        '#919191',
        '#222222'
      ],
      hoverBackgroundColor: [
        '#0072f0',
        '#FBC02D',
        '#17a398',
        '#4c5b61',
        '#7b1fa2'
      ],
      data: mountData()
    }
  ]
}

export default function DoughnutChart () {
  return (
    <Fragment>
      <div css={centerRow}>
        <div css={chartStyle}>
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              title: {
                display: false
              },
              legend: {
                display: true,
                position: 'right',
                labels: {
                  fontColor: 'white',
                  fontSize: 20,
                  fontFamily: 'Lato'
                }
              }
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}

const chartStyle = css`
  width: 750px;
  justify-content: center;
  align-items: center;
`

import React, { Fragment } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { centerRow } from '../globalStyles'

const chartData = {
  labels: ['Travel', 'Office Supplies', 'Vendor', 'Misc', 'Fees'],
  datasets: [
    {
      label: 'Rainfall',
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
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default function DoughnutChart () {
  return (
    <Fragment>
      <div css={centerRow}>
        <Doughnut
          data={chartData}
          options={{
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
    </Fragment>
  )
}

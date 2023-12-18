import { FC } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js'
import {
  donationsActivitySummaryMock,
  spendingActivitySummaryMock,
} from './data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ['', '']

export const data = {
  labels,
  datasets: [
    {
      label: 'Donated to Candidates',
      data: [-donationsActivitySummaryMock.amountCandidates],
      backgroundColor: 'rgb(50, 134, 54)',
    },
    {
      label: 'Spent by Candidates',
      data: [spendingActivitySummaryMock.amountCandidates],
      backgroundColor: 'rgb(227, 41, 38)',
    },
    {
      label: 'Donated to PACs',
      data: [0, -donationsActivitySummaryMock.amountPACs],
      backgroundColor: 'rgb(139, 195, 74)',
    },
    {
      label: 'Spent by PACs',
      data: [0, spendingActivitySummaryMock.amountPACs],
      backgroundColor: 'rgb(255, 152, 0)',
    },
  ],
}

export const SearchChart: FC = () => {
  const datasetProps = {
    barThickness: 50,
    maxBarThickness: 50,
    categoryPercentage: 0.5,
    barPercentage: 1,
  }
  return (
    <Bar
      height={40}
      plugins={[
        {
          id: 'innerBarText',
          afterDatasetDraw(chart, args, pluginOptions) {
            const {
              ctx,
              data: chartData,
              chartArea: { left },
              scales: { x, y },
            } = chart

            ctx.save()

            // ctx.fillStyle = 'white'
            // ctx.fillText(
            //   `${chartData.datasets[0].data[0]}`,
            //   x.getPixelForValue(0) + 10,
            //   y.getPixelForValue(0)
            // )
          },
        },
      ]}
      options={{
        plugins: {
          title: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          legend: {
            position: 'bottom',
            align: 'center',
          },
        },
        // animation: {
        //   onComplete: function ({ chart }) {
        //     const chartInstance = this.chartArea,
        //       ctx = chartInstance.ctx

        //     ctx.font = Chart..helpers.fontString(
        //       Chart.defaults.font.size,
        //       Chart.defaults.global.defaultFontStyle,
        //       Chart.defaults.global.defaultFontFamily
        //     )
        //     ctx.textAlign = 'center'
        //     ctx.textBaseline = 'bottom'

        //     this.data.datasets.forEach(function (dataset, i) {
        //       var meta = chartInstance.controller.getDatasetMeta(i)
        //       meta.data.forEach(function (bar, index) {
        //         var data = dataset.data[index]
        //         ctx.fillText(data, bar._model.x, bar._model.y - 5)
        //       })
        //     })
        //   },
        // },
        responsive: true,
        indexAxis: 'y' as const,
        scales: {
          x: {
            stacked: true,
            grid: {
              color: 'rgba(0, 0, 0, 0)',
            },
            ticks: {
              display: false,
              mirror: true,
            },
          },
          y: {
            stacked: true,
            grid: {
              color: 'rgba(0, 0, 0, 0)',
            },
            ticks: {
              display: false,
              mirror: true,
            },
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            label: 'Donated to Candidates',
            data: [-donationsActivitySummaryMock.amountCandidates, 0],
            backgroundColor: 'rgb(50, 134, 54)',
            ...datasetProps,
          },
          {
            label: 'Spent by Candidates',
            data: [spendingActivitySummaryMock.amountCandidates, 0],
            backgroundColor: 'rgb(227, 41, 38)',
            ...datasetProps,
          },
          {
            label: 'Donated to PACs',
            data: [0, -donationsActivitySummaryMock.amountPACs],
            backgroundColor: 'rgb(139, 195, 74)',
            ...datasetProps,
          },
          {
            label: 'Spent by PACs',
            data: [0, spendingActivitySummaryMock.amountPACs],
            backgroundColor: 'rgb(255, 152, 0)',
            ...datasetProps,
          },
        ],
      }}
    />
  )
}

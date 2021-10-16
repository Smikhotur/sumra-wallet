import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class EarningsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = {
      labels: [
        '01 / 22',
        '02 / 22',
        '03 / 22',
        '04 / 22',
        '05 / 22',
        '06 / 22',
        '07 / 22',
        '08 / 22',
        '09 / 22',
        '10 / 22',
        '11 / 22',
        '12 / 22',
      ],
      datasets: [
        {
          label: 'Income',
          fill: true,
          lineTension: 0.8,
          backgroundColor: 'rgba(132, 110, 237, 0.15)',
          borderWidth: 4,
          borderColor: '#927be9',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#556ee6',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#556ee6',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [265, 153, 226, 195, 340, 405, 225, 180, 222, 305, 173, 223],
        },
      ],
    };
    const legend = {
      display: false,
      title: 'Hello',
      fontColor: '#9B9DB0',
    };
    const labels = {
      // This more specific font property overrides the global property
      font: {
        size: 20,
      },
    };
    const option = {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'rgb(255, 99, 132)',
          },
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
              stepSize: 100,
              color: 'red',
            },
            gridLines: {
              color: '#F0F1F2',
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: '#F0F1F2',
            },
          },
        ],
      },
    };
    return (
      <React.Fragment>
        <Line
          legend={legend}
          labels={labels}
          width={674}
          height={220}
          data={data}
          options={option}
        />
      </React.Fragment>
    );
  }
}

export default EarningsChart;

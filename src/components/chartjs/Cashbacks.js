import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class CashbacksChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
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
          data: [465, 301, 126, 195, 240, 45, 125, 200, 222, 155, 273, 423],
        },
      ],
    };
    const legend = {
      display: false,
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
              stepSize: 200,
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
          width={455}
          height={127}
          data={data}
          options={option}
        />
      </React.Fragment>
    );
  }
}

export default CashbacksChart;

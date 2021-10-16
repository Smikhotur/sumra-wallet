import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component {
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
          lineTension: 0.5,
          backgroundColor: 'rgba(85, 110, 230, 0.2)',
          borderColor: '#556ee6',
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
          data: [165, 381, 56, 155, 440, 355, 445, 280, 322, 455, 173, 223],
        },
      ],
    };
    const legend = {
      display: false,
    };
    const option = {
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
              stepSize: 200,
            },
            zeroLineColor: '#ffcc33',
            gridLines: {
              color: 'rgba(113, 101, 227, 0.15)',
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: 'rgba(113, 101, 227, 0.15)',
            },
          },
        ],
      },
    };
    return (
      <React.Fragment>
        <Line
          legend={legend}
          width={574}
          height={185}
          data={data}
          options={option}
        />
      </React.Fragment>
    );
  }
}

export default LineChart;

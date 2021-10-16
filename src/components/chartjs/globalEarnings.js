import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
  render() {
    const transfers = Array.from({length: 12}).map(() =>
      Math.round(10 + Math.random() * (350 + 1 - 10))
    );
    const rewards = Array.from({length: 12}).map(() =>
      Math.round(10 + Math.random() * (350 + 1 - 10))
    );
    const cash = Array.from({length: 12}).map(() =>
      Math.round(10 + Math.random() * (350 + 1 - 10))
    );
    const invated = Array.from({length: 12}).map(() =>
      Math.round(10 + Math.random() * (350 + 1 - 10))
    );
    const data = {
      labels: [
        'Jun / 21',
        'Feb / 21',
        'Mar / 21',
        'Apr / 21',
        'May / 21',
        'Jun / 21',
        'Jul / 21',
        'Aug / 21',
        'Sep / 21',
        'Oct / 21',
        'Nov / 21',
        'Dec / 21',
      ],
      datasets: [
        {
          label: 'Cashbacks',
          backgroundColor: '#C27AEB',
          data: transfers,
          stack: 'Stack 0',
          barThickness: 9,
        },
        {
          label: 'Invated',
          backgroundColor: '#FEDC01',
          data: rewards,
          stack: 'Stack 0',
          barThickness: 9,
        },
        {
          label: 'Global earnings',
          backgroundColor: '#FF4A7A',
          data: cash,
          stack: 'Stack 0',
          barThickness: 9,
        },
        {
          label: 'Rewards',
          backgroundColor: '#DCDCE9',
          data: invated,
          stack: 'Stack 0',
          barThickness: 9,
        },
      ],
    };

    const option = {
      scales: {
        xAxes: [
          {
            barPercentage: 0.4,
          },
        ],
      },
    };

    return (
      <React.Fragment>
        <Bar width={374} height={124} data={data} options={option} />
      </React.Fragment>
    );
  }
}

export default BarChart;

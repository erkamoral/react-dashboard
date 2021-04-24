import React from 'react';
import {Line, defaults}  from 'react-chartjs-2'


// creates attributes of chart
const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Lorem',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(103, 58, 183,0.1)',
        borderColor: '#673ab7',
        borderWidth: 2,
        data: Array.from({length: 150}, () => Math.floor(Math.random() * 150))
      },
      {
        label: 'Ipsum',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(255, 152, 36,0.1)',
        borderColor: '#FF9824',
        borderWidth: 2,
        data: Array.from({length: 150}, () => Math.floor(Math.random() * 150))
      },
      {
        label: 'Sit',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgb(242, 49, 122,0.1)',
        borderColor: '#F2317A',
        borderWidth: 2,
        data: Array.from({length: 150}, () => Math.floor(Math.random() * 150))
      },
      {
        label: 'Amet',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(67, 161, 158,0.1)',
        borderColor: '#43A19E',
        borderWidth: 2,
        data: Array.from({length: 150}, () => Math.floor(Math.random() * 150))
      },
      {
        label: 'Veniam',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(88, 207, 108, 0.1)',
        borderColor: '#58CF6C',
        borderWidth: 2,
        data: Array.from({length: 150}, () => Math.floor(Math.random() * 150))
      },

    ]
  }
  
class LineChart extends React.Component {
    render() {
      return (
        <div>
          <Line
            height={70}
            data={state}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              title:{
                display:true,
                text:'Number of Attacks per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'bottom'
              },
              animations: {
                radius: {
                  duration: 1000,
                  easing: 'linear',
                  loop: (context) => context.active
                }
              },
            }}
          />
        </div>
      );
    }
  }

export default LineChart
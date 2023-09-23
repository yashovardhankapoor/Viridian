import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {


  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Investment Growth Chart</h2>
      <div style={{ width: '800px', height: '400px', margin: 'auto' }}>
        <Bar
          data={data}
          options={{
            indexAxis: 'y', // Change to 'x' if you prefer horizontal bars
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
import React from 'react';

function SimplePieChart({ data }) {
  const total = data.reduce((acc, value) => acc + value, 0);
  const percentages = data.map(value => (value / total) * 100);

  return (
    <div className="pie-chart">
      {percentages.map((percentage, index) => (
        <div key={index} className="slice" style={{transform: `rotate(${percentages.slice(0, index).reduce((acc, p) => acc + p, 0)}deg)`}}>
          <div className="slice-fill" style={{transform: `rotate(${percentage * 3.6}deg)`}}></div>
        </div>
      ))}
    </div>
  );
}

export default SimplePieChart;

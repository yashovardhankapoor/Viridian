import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Chart from './components/Chart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  const calculateInvestment = ({ principal, rate, years }) => {
    const data = {
      labels: Array.from({ length: years }, (_, i) => i + 1),
      datasets: [
        {
          label: 'Investment Growth',
          data: Array.from({ length: years }, (_, i) =>
            Math.round(principal * Math.pow(1 + rate / 100, i + 1))
          ),
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
        {
          label: 'Principal Amount',
          data: Array.from({ length: years }, () => principal),
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  };

  return (
    <div style={{ padding: '20px' }}> {/* Added padding */}
      <h1>Financial Investment Calculator</h1>
      <InputForm onSubmit={calculateInvestment} />
      {chartData && <Chart data={chartData} />}
    </div>
);

};

export default App;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css';

function PieChart({ formData }) {
  const { allocationData } = formData;

  // Create separate arrays for each category
  const fixedIncomeLabels = [];
  const fixedIncomeData = [];
  const equityLabels = [];
  const equityData = [];
  const realEstateLabels = [];
  const realEstateData = [];

  // Populate the arrays based on the category
  Object.keys(allocationData).forEach((investmentType) => {
    Object.keys(allocationData[investmentType]).forEach((area) => {
      const label = `${investmentType} - ${area}`;
      const value = allocationData[investmentType][area][1];
      
      if (investmentType === 'Fixed-Income Investments') {
        fixedIncomeLabels.push(label);
        fixedIncomeData.push(value);
      } else if (investmentType === 'Equity Investments') {
        equityLabels.push(label);
        equityData.push(value);
      } else if (investmentType === 'Real Estate') {
        realEstateLabels.push(label);
        realEstateData.push(value);
      }
    });
  });

  const fixedIncomeChartData = {
    labels: fixedIncomeLabels,
    datasets: [
      {
        data: fixedIncomeData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderWidth: 1
      }
    ]
  };

  const equityChartData = {
    labels: equityLabels,
    datasets: [
      {
        data: equityData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderWidth: 1
      }
    ]
  };

  const realEstateChartData = {
    labels: realEstateLabels,
    datasets: [
      {
        data: realEstateData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <h2>Fixed-Income Investments</h2>
      <Pie data={fixedIncomeChartData} />
      <h2>Equity Investments</h2>
      <Pie data={equityChartData} />
      <h2>Real Estate</h2>
      <Pie data={realEstateChartData} />
    </div>
  );
}

export default PieChart;

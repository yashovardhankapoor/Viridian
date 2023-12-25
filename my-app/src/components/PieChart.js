import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css';

function PieChart({ formData }) {
  const { age, allocationData } = formData;

  // Create separate arrays for each category
  const fixedIncomeLabels = [];
  const fixedIncomeData = [];
  const equityLabels = [];
  const equityData = [];
  const realEstateLabels = [];
  const realEstateData = [];

  const getAllocationPercentages = (age) => {
    if (age >= 50 && age <= 60) {
      return [35, 45, 20];
    } else if (age >= 61 && age <= 70) {
      return [40, 40, 20];
    } else if (age >= 71 && age <= 75) {
      return [50, 30, 20];
    } else {
      return [0, 0, 0];
    }
  };

  const totalChartData = {
    labels: ['Fixed Income Investments', 'Equity Investments', 'Real Estate'],
    datasets: [
      {
        data: getAllocationPercentages(age),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

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
    <div className="chart-container">
      <div className="chart">
        <h2>ALLOCATION</h2>
        <Pie data={totalChartData} />
      </div>
      <hr width="1000px" className='horizontalRule'></hr>
      <div className="pie-charts">
        <div className="chart">
          <h2>Fixed-Income Investments</h2>
          <Pie data={fixedIncomeChartData} />
        </div>
        <div className="chart">
          <h2>Equity Investments</h2>
          <Pie data={equityChartData} />
        </div>
        <div className="chart">
          <h2>Real Estate</h2>
          <Pie data={realEstateChartData} />
        </div>
      </div>
    </div>
  );
}

export default PieChart;
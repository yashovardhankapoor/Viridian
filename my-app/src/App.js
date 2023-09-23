import React, { useState, useEffect } from 'react';
import InvestmentForm from './components/InvestmentForm';
import PieChart from './components/PieChart';
import Chart from './components/Chart';
import InputForm from './components/InputForm';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState('');

  const calculateInvestment = ({principal, rate, years}) => {
    let a = principal;
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
  }

  const handleCalculate = (age, totalInvestment) => {
    const ageRange = Math.min(60, age) - 50;
    const fixedIncomeMin = ageRange * 5 + 35;
    const fixedIncomeMax = ageRange * 5 + 45;
    const equityMin = 100 - fixedIncomeMax;
    const equityMax = 100 - fixedIncomeMin;

    const fixedIncomeAllocation = {
      "Government Bonds": [20 + ageRange * 2, 30 + ageRange * 2],
      "Corporate Bonds": [10 + ageRange * 2, 20 + ageRange * 2],
      "Fixed Deposits": [5 + ageRange, 10 + ageRange]
    };

    const equityAllocation = {
      "Large-Cap Stocks": [20 + ageRange * 2, 30 + ageRange * 2],
      "Mid-Cap Stocks": [10 + ageRange, 15 + ageRange],
      "Small-Cap Stocks": [5 + ageRange, 10 + ageRange],
      "Index Funds or ETFs": [5 + ageRange, 10 + ageRange]
    };

    const realEstateAllocation = {
      "Real Estate Investment Trusts (REITs) or Real Estate Mutual Funds (REMFs)": [10 + ageRange * 2, 20 + ageRange * 2]
    };

    const allocationData = {
      "Fixed-Income Investments": fixedIncomeAllocation,
      "Equity Investments": equityAllocation,
      "Real Estate": realEstateAllocation
    };

    setTotalInvestment(totalInvestment); // Update totalInvestment

    setFormData({
      age,
      totalInvestment,
      allocationData
    });
  }

  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <h1>Financial Investment Bar Graph</h1>
        <InputForm onSubmit={calculateInvestment} totalInvestment={totalInvestment}   />
        {chartData && <Chart data={chartData} />}
      </div>
      <div>
      <h1>Pie Chart</h1>
        <InvestmentForm onCalculate={handleCalculate} />
        {formData && (
          <>
            <PieChart formData={formData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

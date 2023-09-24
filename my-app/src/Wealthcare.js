import React, { useState, useEffect } from "react";
import InvestmentForm from "./components/InvestmentForm";
import PieChart from "./components/PieChart";
import Chart from "./components/Chart";
import InputForm from "./components/InputForm";
import "./Wealthcare.css";
import Navbar from "./components/Navbar";

function Wealthcare() {
  const [formData, setFormData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState("");

  const calculateInvestment = ({ principal, rate, years }) => {
    let a = principal;
    const data = {
      labels: Array.from({ length: years }, (_, i) => i + 1),
      datasets: [
        {
          label: "Investment Growth",
          data: Array.from({ length: years }, (_, i) =>
            Math.round(principal * Math.pow(1 + rate / 100, i + 1))
          ),
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
        {
          label: "Principal Amount",
          data: Array.from({ length: years }, () => principal),
          backgroundColor: "rgba(255,99,132,0.4)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
        },
      ],
    };

    setChartData(data);
  };
  const handleCalculate = (age, totalInvestment) => {
    if (age < 50 || age > 75) {
      alert("Please enter an age between 50 and 75.");
      return;
    }

    setTotalInvestment(totalInvestment);

    const ageRange = age - 50;
    const fixedIncomeMin = ageRange * 2 + 30;
    const fixedIncomeMax = ageRange * 2 + 40;

    const equityMin = 100 - fixedIncomeMax;
    const equityMax = 100 - fixedIncomeMin;

    const fixedIncomeAllocation = {
      "Government Bonds": [15 + ageRange, 20 + ageRange],
      "Corporate Bonds": [10 + ageRange, 15 + ageRange],
      "Municipal Bonds": [5 + ageRange, 10 + ageRange],
    };

    const equityAllocation = {
      "Large-Cap Stocks": [30 + ageRange, 40 + ageRange],
      "Mid-Cap Stocks": [10 + ageRange, 15 + ageRange],
      "Small-Cap Stocks": [5 + ageRange, 10 + ageRange],
      "International Stocks": [5 + ageRange, 10 + ageRange],
    };

    const realEstateAllocation = {
      "Real Estate Investment Trusts (REITs)": [10 + ageRange, 15 + ageRange],
      "Physical Real Estate Holdings": [0, 5 + ageRange],
    };

    const allocationData = {
      "Fixed-Income Investments": fixedIncomeAllocation,
      "Equity Investments": equityAllocation,
      "Real Estate": realEstateAllocation,
    };

    setFormData({
      age,
      totalInvestment,
      allocationData,
    });
  };

  return (
    <div className="Wealthcare">
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Financial Investment Bar Graph</h1>
        <InputForm
          onSubmit={calculateInvestment}
          setTotalInvestment={setTotalInvestment}
        />
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

export default Wealthcare;

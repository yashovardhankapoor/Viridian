import React, { useState, useEffect } from "react";
import InvestmentForm from "./components/InvestmentForm";
import PieChart from "./components/PieChart";
import Chart from "./components/Chart";
import InputForm from "./components/InputForm";
import "./Wealthcare.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <div>
    <div className="Wealthcare">
      <Navbar />
      <div className="ciInfo">
        <div className="title">THE POWER OF COMPOUNDING</div>
      <p className="paragraph">Compound interest is the interest earned on both the principal amount and the accumulated interest. This means that your investment grows exponentially over time, even if you don't add any more money to it.</p>
      <p className="paragraph">The effect of compounding is most pronounced when you invest for the long term. For example, if you invest ₹10,000 at a 7% annual return, your investment will grow to ₹49,632 after 20 years. But if you wait 40 years, your investment will grow to ₹1,52,388.</p>
      <p className="paragraph">This is because you are earning interest on your interest. In the first example, you earn interest on the original ₹10,000 investment. But in the second example, you also earn interest on the interest that you earned in the first 20 years.</p>
      <p className="paragraph">Senior citizens often have a number of financial needs, including retirement income, healthcare costs, and long-term care. Investment can help senior citizens meet these needs and achieve their financial goals.</p>
      <ul className="unorderedList">
      Here are some of the benefits of investment for senior citizens:
      <li className="listItem"><span className="blueText">Generate income:</span> Investments can generate income in the form of dividends, interest, or capital gains. This income can help supplement Social Security benefits and other retirement income sources.</li>
      <li className="listItem"><span className="blueText">Grow wealth:</span> Over time, investments can grow in value, which can help senior citizens build wealth and achieve their financial goals.</li>
      <li className="listItem"><span className="blueText">Hedging against inflation:</span> Inflation can erode the purchasing power of savings over time. Investments can help senior citizens hedge against inflation by providing them with the opportunity to grow their wealth at a faster rate than inflation.</li>
      <li className="listItem"><span className="blueText">Leaving a legacy:</span> Investments can help senior citizens leave a legacy for their loved ones. By investing and growing their wealth, senior citizens can provide their loved ones with financial security after they are gone.</li>
      </ul>


      </div>
      <div style={{ padding: "20px" }}>
        <div className="title">Financial Investment Bar Graph</div>
        <InputForm
          onSubmit={calculateInvestment}
          setTotalInvestment={setTotalInvestment}
        />
        {chartData && <Chart data={chartData} />}
      </div>
      <hr />
      <div className="distributionInfo">
        Now that we have understood the importance of compounding, let us plan the distribution of your savings in different investment instruments. Diversifying an investment into equity, real estate, and fixed-income instruments is important to reduce risk and improve returns over the long term. Equity markets offer the highest potential returns, but they are also the most volatile. Real estate and fixed-income instruments offer lower returns, but they are also less volatile. By diversifying across all three asset classes, investors can reduce their overall exposure to any one particular asset class and create a portfolio that is aligned with their risk tolerance, investment goals, and time horizon.
      </div>
        <div className="title">Where should you invest</div>
        <div className="investmentForm">
      <div className="centered-container"> {/* Add this container */}
        <h1>Pie Chart</h1>
        <InvestmentForm onCalculate={handleCalculate} />
        <div>
        {formData && (
          <>
            <PieChart formData={formData} />
          </>
        )}
        </div>    
        </div>
    </div>
    <Footer />
    </div>
    /</div>
  );
}

export default Wealthcare;

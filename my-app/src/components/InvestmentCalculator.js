import React, { useState } from 'react';

const InvestmentCalculator = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ principal, rate, years, age });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'inline-block',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}
      >
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label style={{ marginRight: '10px' }}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label style={{ marginRight: '10px' }}>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            style={{
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label style={{ marginRight: '10px' }}>Annual Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            style={{
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left' }}>
          <label style={{ marginRight: '10px' }}>Number of Years:</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            style={{
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default InvestmentCalculator;

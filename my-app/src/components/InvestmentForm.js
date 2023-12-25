import React, { useState } from 'react';
import './InvestmentForm.css'; // Make sure to import the CSS file

function InvestmentForm({ onCalculate }) {
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(age);
  }

  return (
    <form onSubmit={handleSubmit} className="investment-form">
      <div className="form-group">
        <label htmlFor="age">AGE :</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit">CALCULATE</button>
    </form>
  );
}

export default InvestmentForm;

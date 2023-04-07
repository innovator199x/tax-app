import React, { useState } from "react";
import "./taxcalulator.css";

function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(0);
  const [selectedOptionTax, setSelectedOptionTax] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const calculateTax = () => {
    const taxValue = income * selectedOptionTax;
    if (isNaN(taxValue)) {
      seterrorMessage("Please input numbers only");
      setTax(0);
    } else if (income.length > 7) {
      seterrorMessage("Maximum of 7 digits only");
      setTax(0);
    } else {
      seterrorMessage("");
      setTax(taxValue);
    }
  };

  const handleOptionTax = (event) => {
    setSelectedOptionTax(event.target.value);
  };

  return (
    <div className="container">
      <h1>Tax Calculator</h1>
      <label htmlFor="income">Tax Result: {tax.toFixed(2)}</label>
      <input
        type="text"
        id="income"
        placeholder="Input Income"
        onChange={(e) => setIncome(e.target.value)}
      />
      <select
        className="tax-option"
        value={selectedOptionTax}
        onChange={handleOptionTax}
      >
        <option value="">-- Please Select Tax --</option>
        <option value=".10">10%</option>
        <option value=".15">15%</option>
        <option value=".20">20%</option>
        <option value=".30">30%</option>
      </select>
      <button onClick={calculateTax}>Calculate my Income Tax</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default TaxCalculator;

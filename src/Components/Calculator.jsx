import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [propertyPrice, setPropertyPrice] = useState(15000000);
  const [downPayment, setDownPayment] = useState(30); // in percentage
  const [loanPeriod, setLoanPeriod] = useState(20); // in years
  const annualInterestRate = 3; // Fixed interest rate

  // Calculate the initial deposit
  const initialDeposit = propertyPrice * (downPayment / 100); 

  // Calculate the principal amount
  const principal = propertyPrice - initialDeposit; 

  // Calculate monthly interest rate
  const monthlyInterestRate = annualInterestRate / 12 / 100; 

  // Calculate total number of payments (months)
  const totalPayments = loanPeriod * 12; 

  // Calculate monthly installments (EMI)
  const monthlyInstallments = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
                              (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const interestRate = "3% Fixed";
  const loanType = "Conventional";


  function hide(){
    const a=document.getElementsByClassName('loan-details')
    const b=document.getElementsByClassName('calculate-button')
    if (a.length > 0) {
        a[0].style.display = "block";
      }
      if (b.length > 0) {
        b[0].style.display = "none";
  }
}

  return (
    <div className="calculator-container">
      <h1>Home Loan Calculator</h1>
      <p>Explore your options in detail using our home loan calculator to get the best loan package to achieve your dream home</p>
      
      <div className="calculator-inputs">
        <div className="input-group">
          <b>Property Price</b>
          <p className="input-value">PKR {propertyPrice.toLocaleString()}</p>
          <input
            type="range"
            min="5000000"
            max="50000000"
            step="100000"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
          />
        </div>
        
        <div className="input-group">
          <b>Down Payment</b>
          <p className="input-value">% {downPayment} <span>({(propertyPrice * downPayment / 100).toLocaleString()} PKR)</span></p>
          <input
            type="range"
            min="5"
            max="100"
            step="1"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <b>Loan Period</b>
          <p className="input-value">Years {loanPeriod} <span>({loanPeriod * 12} Months)</span></p>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(Number(e.target.value))}
          />
        </div>
      </div>

      <button className="calculate-button" onClick={hide}>Calculate</button>

      {/* Loan Details Section */}
      <div className="loan-details">
        <h2>Ghar Sahulat Scheme</h2>
        <div className="loan-info">
          <div className="info-item">
            <b>Monthly Installments</b>
            <p className="info-value">PKR {monthlyInstallments.toLocaleString()}</p>
          </div>
          <div className="info-item">
            <b>Initial Deposit</b>
            <p className="info-value">PKR {initialDeposit.toLocaleString()}</p>
          </div>
          <div className="info-item">
            <b>Interest</b>
            <p className="info-value">{interestRate}</p>
          </div>
          <div className="info-item">
            <b>Loan Type</b>
            <p className="info-value">{loanType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

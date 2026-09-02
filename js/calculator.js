/**
 * Auto Marinikas - Financing & Loan Calculator
 */

class LoanCalculator {
  constructor() {
    this.carPriceInput = document.getElementById('calc-price');
    this.carPriceRange = document.getElementById('calc-price-range');
    this.depositInput = document.getElementById('calc-deposit');
    this.depositRange = document.getElementById('calc-deposit-range');
    this.durationSelect = document.getElementById('calc-duration');
    this.interestRateInput = document.getElementById('calc-interest');

    this.monthlyResult = document.getElementById('calc-monthly-result');
    this.totalLoanResult = document.getElementById('calc-loan-amount');
    this.totalInterestResult = document.getElementById('calc-total-interest');
    this.totalCostResult = document.getElementById('calc-total-cost');

    this.init();
  }

  init() {
    if (!this.carPriceInput || !this.monthlyResult) return;

    // Sync number inputs and range sliders
    this.syncInputs(this.carPriceInput, this.carPriceRange);
    this.syncInputs(this.depositInput, this.depositRange);

    // Add event listeners
    const inputs = [
      this.carPriceInput, this.carPriceRange,
      this.depositInput, this.depositRange,
      this.durationSelect, this.interestRateInput
    ];

    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', () => this.calculate());
        input.addEventListener('change', () => this.calculate());
      }
    });

    // Preset buttons (deposit percentage shortcuts)
    const presetButtons = document.querySelectorAll('.calc-preset-btn');
    presetButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        presetButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const percent = parseFloat(e.currentTarget.dataset.percent);
        const price = parseFloat(this.carPriceInput.value) || 0;
        const deposit = Math.round(price * (percent / 100));
        this.depositInput.value = deposit;
        if (this.depositRange) this.depositRange.value = deposit;
        this.calculate();
      });
    });

    this.calculate();
  }

  syncInputs(numInput, rangeInput) {
    if (!numInput || !rangeInput) return;
    numInput.addEventListener('input', () => {
      rangeInput.value = numInput.value;
    });
    rangeInput.addEventListener('input', () => {
      numInput.value = rangeInput.value;
    });
  }

  setVehiclePrice(price) {
    if (!this.carPriceInput) return;
    this.carPriceInput.value = price;
    if (this.carPriceRange) this.carPriceRange.value = price;
    
    // Set default deposit to 20%
    const deposit = Math.round(price * 0.2);
    this.depositInput.value = deposit;
    if (this.depositRange) {
      this.depositRange.max = price;
      this.depositRange.value = deposit;
    }
    this.calculate();
  }

  calculate() {
    const price = parseFloat(this.carPriceInput.value) || 0;
    const deposit = Math.min(parseFloat(this.depositInput.value) || 0, price);
    const months = parseInt(this.durationSelect.value) || 48;
    const annualRate = (parseFloat(this.interestRateInput ? this.interestRateInput.value : 7.9) || 7.9) / 100;

    const principal = Math.max(0, price - deposit);

    let monthlyPayment = 0;
    let totalInterest = 0;

    if (principal > 0 && months > 0) {
      const monthlyRate = annualRate / 12;
      if (monthlyRate > 0) {
        monthlyPayment = (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
                         (Math.pow(1 + monthlyRate, months) - 1);
      } else {
        monthlyPayment = principal / months;
      }
      totalInterest = (monthlyPayment * months) - principal;
    }

    const totalCost = principal + totalInterest + deposit;

    // Update UI
    if (this.monthlyResult) {
      this.monthlyResult.textContent = `€${Math.round(monthlyPayment).toLocaleString('el-GR')}`;
    }
    if (this.totalLoanResult) {
      this.totalLoanResult.textContent = `€${Math.round(principal).toLocaleString('el-GR')}`;
    }
    if (this.totalInterestResult) {
      this.totalInterestResult.textContent = `€${Math.round(totalInterest).toLocaleString('el-GR')}`;
    }
    if (this.totalCostResult) {
      this.totalCostResult.textContent = `€${Math.round(totalCost).toLocaleString('el-GR')}`;
    }
  }
}

// Global instance
window.loanCalculator = null;
document.addEventListener('DOMContentLoaded', () => {
  window.loanCalculator = new LoanCalculator();
});

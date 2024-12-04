import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  loanAmount: number = 100;
  interestRate: number = 5;
  timePeriod: number = 12;
  emi: string = '0.00'; // Change type to string to handle formatted value

  constructor() {
    this.calculateEMI();
  }

  calculateEMI() {
    const monthlyRate = this.interestRate / (12 * 100);
    const months = this.timePeriod;
    const emiValue = (this.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    this.emi = emiValue.toFixed(2); // Format to 2 decimal points
  }

  reset() {
    this.loanAmount = 50000;
    this.interestRate = 18;
    this.timePeriod = 12;
    this.calculateEMI(); // Recalculate EMI after resetting
  }
}
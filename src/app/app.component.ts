import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [WelcomeComponent,LoanCalculatorComponent] // Import the standalone component here
})
export class AppComponent { }
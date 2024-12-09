import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { TitleFormComponent } from "./title-form/title-form.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [WelcomeComponent, LoanCalculatorComponent, TitleFormComponent] // Import the standalone component here
 // Import the standalone component here
})
export class AppComponent { 
  
  title:string;
  constructor(){
    this.title="Angular SPA 1.O";

  }
  updateTitle=(title:string)=>{
    this.title=title;
  }
}
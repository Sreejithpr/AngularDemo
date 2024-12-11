import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { TitleFormComponent } from "./title-form/title-form.component";
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [WelcomeComponent, LoanCalculatorComponent, TitleFormComponent,DirectivesDemoComponent,PipesDemoComponent] // Import the standalone component here

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
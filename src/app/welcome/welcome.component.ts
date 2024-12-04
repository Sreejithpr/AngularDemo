import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome', // Corrected selector
  standalone: true,
  imports: [FormsModule], // Corrected imports array
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] // Corrected to styleUrls
})
export class WelcomeComponent {
  userName: string;
  logos: string[];
  logoIndex: number;

  constructor() {
    this.userName = "Somebody";
    this.logos = [
      // "assets/images/w1.jpeg",
      // "assets/images/w2.jpeg",
      // "assets/images/w3.png"
    ];
    this.logoIndex = 0; // Corrected initialization
  }

  changeLogo() {
    this.logoIndex++;
    if (this.logoIndex === this.logos.length) {
      this.logoIndex = 0;
    }
  }
}
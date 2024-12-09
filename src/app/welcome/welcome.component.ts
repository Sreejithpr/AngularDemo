import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ FormsModule ,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  userName:string;

  logos:string[];

  logoIndex:number;
  logoWidth:number;
  logoClass:any;


  constructor(){
    this.userName="Somebody";
    
    this.logos=[
      "assets/images/1.png",
      "assets/images/3.png",
      "assets/images/123.png",
      "assets/images/r.png"
    ];

    this.logoIndex=0;
    this.logoWidth=300;
    this.logoClass={border:true,centered:true}
  }

  changeLogo(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  // 1
  cardCountryName1: string = "Spain";
  cardCity1: string = "Barcelona";
  cardPrice1: number = 250;
  cardImage1: string = "../../assets/bacelona.jpg";
  // 2
  cardCountryName2: string = "Greece";
  cardCity2: string = "Atens";
  cardPrice2: number = 350;
  cardImage2: string = "../../assets/atens.jpg";
  // 3
  cardCountryName3: string = "Austria";
  cardCity3: string = "Salzburg";
  cardPrice3: number = 350;
  cardImage3: string = "../../assets/salzburg.jpg";
//  4
  cardCountryName4: string = "France";
  cardCity4: string = "Paris";
  cardPrice4: number = 450;
  cardImage4: string = "../../assets/paris.jpg";
// 5
  cardCountryName5: string = "Czech Rep.";
  cardCity5: string = "Prague";
  cardPrice5: number = 350;
  cardImage5: string = "../../assets/prague.jpg"; 
// 6
  cardCountryName6: string = "Poland";
  cardCity6: string = "Warsaw";
  cardPrice6: number = 250;
  cardImage6: string = "../../assets/warsaw.jpg"; 
  constructor() { 

 
  }

  ngOnInit(): void {
  }

}










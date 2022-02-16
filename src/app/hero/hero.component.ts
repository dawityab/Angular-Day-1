import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string = "MAGELLAN TRAVEL AGENCY";
  heroText: string = "ENJOY YOUR SUMMER WITH OUR SERVICE";
  heroText1: string = "Magellan Travel’s mission is to enhance the profitability and mutual success of its member agents and the Group. Magellan Members collaborate within a niche network of like-minded high-performance Travel Agents co-operating and learning from each other.";
  heroBtnText: string = "See more";
  herBtnUrl: string = "https://magellan.com";
  constructor() { }

  ngOnInit(): void {
  }

}

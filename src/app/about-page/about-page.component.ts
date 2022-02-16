import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  aboutHeading: string = "ABOUT US";
  aboutText: string = "The Magellan Travel Group was formed by three Travel Agents who were high profile, long-standing members of the Australian Travel Industry.Together they shared a vision to develop a new Group to cater for the needs of strong, independent, successful Travel Agents. They formed Magellan Travel Group in April 2008 with this objective.Over 10 years the Group grew to become a major force in the industry and in March of 2018 was acquired by Helloworld Travel Limited an integrated travel service provider offering retail, wholesale, corporate, inbound and tour operating businesses in Australia, New Zealand, the South Pacific, Asia and around the world.";
  
  
  aboutBtnUrl: string = "https://magellan.com";
  constructor() { }

  ngOnInit(): void {
  }

}

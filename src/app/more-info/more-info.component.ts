import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

title: string = "Why We're the Best";
infoTitle1: string = "Accommodation";
infoText1: string = "We offer the first selection of top hotels anywhere!";
// 2
infoTitle2: string = "Transportation";
infoText2: string = " Whenever it's about air tickets, we will set it up!";
// 3
infoTitle3: string = "Seasoned Agents";
infoText3: string = "Combined the expreience our agents have it centuries!";
// 4
infoTitle4: string = "Easy Trip planing";
infoText4: string = "Our travel agents are always ready to plan your perfect tip!";


  constructor() { }

  ngOnInit(): void {
  }

}

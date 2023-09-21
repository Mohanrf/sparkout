import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { ViewportScroller } from '@angular/common';


const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

declare var AOS: any;
@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css'],
  providers: [NgbAccordionConfig]
})

export class TechnologyStackComponent implements OnInit {

  //menulist=['Real Estate','Travel','Sports','Social Networking','Fintech','Media & Entertainment','Transportation & Logistics','Healthcare Solutions'];
  technologystack=['Mobile','Front End','Back End','DevOps','Database','Testing','UI/UX',];
  techlisted:any;
  //selectedlisted:any;
  constructor(config: NgbAccordionConfig,private viewportScroller: ViewportScroller) {
    config.closeOthers = true;
    config.type = 'info';
  }


  ngOnInit(): void {
    AOS.init();
    //this.selectedlisted=this.menulist[0];
    this.techlisted=this.technologystack[0];
  }
  // openmenu(menulist :any){
  //   this.selectedlisted=menulist;
  // }
  opentechnology(techmenu :any){
    this.techlisted=techmenu;
  }
  showTab = 1;
  tabToggle(showTab:any){
    this.showTab =showTab;
  }

  show = true;
  scroll(){
   this.viewportScroller.scrollToAnchor('travel')

    console.log('test top')
  }
}




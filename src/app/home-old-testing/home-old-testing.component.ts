import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { transition, style, animate, trigger } from '@angular/animations';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { ViewportScroller } from '@angular/common';
//import {AccordionModule} from "ngx-accordion";

import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from 'src/app/services/canonical.service';





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
  selector: 'app-home-old-testing',
  templateUrl: './home-old-testing.component.html',
  styleUrls: ['./home-old-testing.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ],
  providers: [NgbAccordionConfig]
})
export class HomeOldTestingComponent implements OnInit {

    title = 'Sparkout Tech | House of Innovation - Software Development Company';

    menulist=['Real Estate','Travel','Sports','Social Networking','Fintech','Media & Entertainment','Transportation & Logistics','Healthcare Solutions'];
    technologystack=['Mobile','Front End','Back End','Devops','Database','Testing','UI/UX',];
    techlisted:any;
    selectedlisted:any;
    constructor(config: NgbAccordionConfig,private viewportScroller: ViewportScroller,
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) {
      config.closeOthers = true;
      config.type = 'info';
    }
    customOptions: OwlOptions = {
      loop: true,
      margin:20,
      autoplay:true,
      center: false,
      dots: false,
      autoHeight: true,
      autoWidth: true,
      responsive: {
        0: {
          items: 1,
        },
        280: {
          items: 2,
        },
        480: {
          items: 3,
          margin:30,
        },
        767: {
          items: 4,
          margin:50,
        },
        1000: {
          items: 6,
          margin:50,
        }
      }
    }
    bannerOptions: OwlOptions = {
      loop: true,
      margin:20,
      autoplay:true,
      center: false,
      dots: false,
      items:1,
      slideTransition: 'linear',
      autoplayTimeout: 0,
      autoplaySpeed: 15000,
      autoplayHoverPause:true,
      autoWidth:true,
      autoHeight:true,
    }
    testMonial: OwlOptions = {
      loop: true,
      margin:100,
      autoplay:false,
      center: false,
      nav:true,
      navText:["<img src='assets/images/testmonial/prev-arrow.svg' width='50' height='50'>","<img src='assets/images/testmonial/next-arrow.svg' width='50' height='50'>"],
      dots: false,
      responsive: {
        0: {
          items: 1.1,
        },
        600: {
          items: 1.1,
        },
        1000: {
          items: 1.2,
        }
      },

    }

    featuredCaseStudyOptions: OwlOptions = {
      loop: true,
      margin:50,
      items: 1,
      autoplay:true,
      center: false,
      dots: false,
      smartSpeed: 2000,
      autoHeight: true,
      autoWidth: true
    }

    ngOnInit(): void {
      AOS.init();
      this.selectedlisted=this.menulist[0];
      this.techlisted=this.technologystack[0];
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'Hire industry professionals with a leading software development company. Bleeding-edge software development services.' });
      this.meta.updateTag({ name: 'keywords', content: 'Software development company, Software development services, custom software development company' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions Pvt Ltd' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Sparkout Tech | House of Innovation - Software Development Company' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ property: 'og:description', content: 'Hire industry professionals with a leading software development company. Bleeding-edge software development services.' });
      this.meta.updateTag({ property: 'og:type', content: 'Hire industry professionals with a leading software development company. Bleeding-edge software development services.' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Sparkout Tech | House of Innovation - Software Development Company' });
      this.meta.updateTag({ name: 'twitter:description', content: 'Hire industry professionals with a leading software development company. Bleeding-edge software development services.' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/");
    }
    openmenu(menulist :any){
      this.selectedlisted=menulist;
    }
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


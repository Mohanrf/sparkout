import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { ViewportScroller } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


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
  selector: 'app-drone-development',
  templateUrl: './drone-development.component.html',
  styleUrls: ['./drone-development.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ],
  providers: [NgbAccordionConfig]
})

export class DroneDevelopmentComponent implements OnInit {
  title = 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech';


  industrystack=['Mobile','Front End','Back End','DevOps','Database','Testing','UI/UX',];
  industrylisted:any;
  constructor(
    config: NgbAccordionConfig,
    private viewportScroller: ViewportScroller,
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) {
    config.closeOthers = true;
    config.type = 'info';
  }


  ngOnInit(): void {
    AOS.init();
    this.industrylisted=this.industrystack[0];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Drone mapping software can help a lot of physical transit and run more efficiently in businesses.Leverage drone software development services along with appropriate data to increase productivity, minimize costs.' });
    this.meta.updateTag({ name: 'keywords', content: 'Drone software development, drone mapping software, drone software development company, Drone software development services' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/drone-software-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Drone mapping software can help a lot of physical transit and run more efficiently in businesses.Leverage drone software development services along with appropriate data to increase productivity, minimize costs.' });
    this.meta.updateTag({ property: 'og:type', content: 'Drone mapping software can help a lot of physical transit and run more efficiently in businesses.Leverage drone software development services along with appropriate data to increase productivity, minimize costs.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Drone mapping software can help a lot of physical transit and run more efficiently in businesses.Leverage drone software development services along with appropriate data to increase productivity, minimize costs.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/drone-software-development/");
  }
  openindustry(industrymenu :any){
    this.industrylisted=industrymenu;
  }
  showTab = 1;
  tabToggle(showTab:any){
    this.showTab =showTab;
  }

  show = true;
}




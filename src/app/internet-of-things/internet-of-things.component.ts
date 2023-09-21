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
  selector: 'app-internet-of-things',
  templateUrl: './internet-of-things.component.html',
  styleUrls: ['./internet-of-things.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ],
  providers: [NgbAccordionConfig]
})

export class InternetOfThingsComponent implements OnInit {

  title = 'Internet of things Development | Transform the world with futuristic IoT Solutions - Sparkout ';

  industrystack=['Mobile','Front End','Back End','Devops','Database','Testing','UI/UX',];
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
    this.meta.updateTag({ name: 'description', content: 'Tap into our extensive expertise in IoS solutions to introduce top-notch custom solutions to the market. Driven by our clients aspirations, we leverage the power of the Internet of Things (IoT) Development to help global enterprises build mobile solutions..' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Internet of things Development | Transform the world with futuristic IoT Solutions - Sparkout ' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/internet-of-things/' });
    this.meta.updateTag({ property: 'og:description', content: 'Tap into our extensive expertise in IoS solutions to introduce top-notch custom solutions to the market. Driven by our clients aspirations, we leverage the power of the Internet of Things (IoT) Development to help global enterprises build mobile solutions..' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Internet of things Development | Transform the world with futuristic IoT Solutions - Sparkout ' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Tap into our extensive expertise in IoS solutions to introduce top-notch custom solutions to the market. Driven by our clients aspirations, we leverage the power of the Internet of Things (IoT) Development to help global enterprises build mobile solutions..' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/internet-of-things/");
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





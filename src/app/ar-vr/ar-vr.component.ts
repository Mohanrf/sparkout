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
  selector: 'app-ar-vr',
  templateUrl: './ar-vr.component.html',
  styleUrls: ['./ar-vr.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ],
  providers: [NgbAccordionConfig]
})

export class ArVrComponent implements OnInit {

  title = 'Augmented Reality Solutions Provider - Custom AR/VR Solutions for your Innovative Business | Sparkout Techh';

  industrystack=['Banking','Retail','Healthcare','Supply Chain','Logistics','Insurance','Automotive'];
  industrylisted:any;
  constructor(config: NgbAccordionConfig,private viewportScroller: ViewportScroller,
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
    this.meta.updateTag({ name: 'description', content: 'Build applications that cater to your customers better with ar/vr solutions. AR/VR development company.' });
    this.meta.updateTag({ name: 'keywords', content: 'vr & ar development software, vr & ar app development, vr & ar development companies, virtual reality development companies, virtual reality app development, vr & ar app development company, vr & ar development company, vr & ar development services' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Augmented Reality Solutions Provider - Custom AR/VR Solutions for your Innovative Business | Sparkout Techh' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/ar-vr-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Build applications that cater to your customers better with ar/vr solutions. AR/VR development company.' });
    this.meta.updateTag({ property: 'og:type', content: 'Build applications that cater to your customers better with ar/vr solutions. AR/VR development company.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Augmented Reality Solutions Provider - Custom AR/VR Solutions for your Innovative Business | Sparkout Techh' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Build applications that cater to your customers better with ar/vr solutions. AR/VR development company.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/ar-vr-application-development/");
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





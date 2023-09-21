
import {  Component, OnInit, Renderer2 } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
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
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})

export class HomeNewComponent implements OnInit {
  //@ViewChild('crmForm', { static: false }) div1: ElementRef;
  title = 'Sparkout Tech | House of Innovation - Software Development Company';


  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) {
  }


  ngOnInit(): void {
    AOS.init();
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





}




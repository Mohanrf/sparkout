import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { ViewportScroller } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  selector: 'app-blockchain-development',
  templateUrl: './blockchain-development.component.html',
  styleUrls: ['./blockchain-development.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ],
  providers: [NgbAccordionConfig]
})

export class BlockchainDevelopmentComponent implements OnInit {

  title = 'Enterprise Blockchain Development Company - Build and Launch Robust Dapps your users will love | Sparkout Tech';

  industrystack=['Mobile','Front End','Back End','Devops','Database','Testing','UI/UX',];
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
    this.meta.updateTag({ name: 'description', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ name: 'keywords', content: 'Blockchain development company, blockhain development services, blockchain solution provider, Enterprise Blockchain Development Company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Enterprise Blockchain Development Company - Build and Launch Robust Dapps your users will love | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/blockchain-development-company/' });
    this.meta.updateTag({ property: 'og:description', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ property: 'og:type', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Enterprise Blockchain Development Company - Build and Launch Robust Dapps your users will love | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/blockchain-development-company/");
  }
  openindustry(industrymenu :any){
    this.industrylisted=industrymenu;
  }
  showTab = 1;
  tabToggle(showTab:any){
    this.showTab =showTab;
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
  show = true;
}




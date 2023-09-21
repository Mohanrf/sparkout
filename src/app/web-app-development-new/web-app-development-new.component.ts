import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { transition, style, animate, trigger } from '@angular/animations';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';
import { ViewportScroller } from '@angular/common';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

const fadeOut = trigger('fadeOut', [leaveTrans]);

declare var AOS: any;

@Component({
  selector: 'app-web-app-development-new',
  templateUrl: './web-app-development-new.component.html',
  styleUrls: ['./web-app-development-new.component.css'],
  animations: [fadeIn, fadeOut],
  providers: [NgbAccordionConfig],
})
export class WebAppDevelopmentNewComponent {
  title = 'Top Web App Development Company Creating Robust Solution To Relentlessly Carryout Business Operations. ';
  menulist = [
    'Custom Web app development',
    'E-commerce Development',
    'Progressive web apps',
    'SaaS Products',
    'Static web apps',
    'Web app support and Maintenance',
    'Web CRM Development',
  ];
  technologystack = [
    'Frontend',
    'Backend',
    'Database',
    'Design Tools',
  ];
  techlisted: any;
  selectedlisted: any;
  viewportScroller: any;
  constructor(
    config: NgbAccordionConfig,
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService
  ) {
    config.closeOthers = true;
    config.type = 'info';
  }
  bannerOptions: OwlOptions = {
    loop: true,
    margin: 0,
    autoplay: true,
    center: false,
    dots: true,
    rewind: false,
    items: 1,
    //smartSpeed: 3000,
    autoplaySpeed: 5000,

    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  };
  casestudyOptions: OwlOptions = {
    loop: true,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    items: 2,
    autoplaySpeed: 4000,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      480: {
        margin: 25,
        items: 2,
      },
      767: {
        margin: 30,
        items: 2,
      },
      1199: {
        margin: 34,
        items: 2,
      },
    },
  };

  reviewsOptions: OwlOptions = {
    loop: false,
    margin:34,
    autoplay:true,
    center: false,
    dots: false,
    nav:true,
    navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
    items:3,
    smartSpeed: 1000,
    autoplaySpeed: 5000,
    responsive: {
      0: {
        margin:20,
        items:1,
      },
      400: {
        margin:25,
        items:2,
      },
      767: {
        margin:25,
        items:3,
      },
      1199: {
        margin:30,
        items:3,
      },
      1350: {
        margin:34,
        items:3,
      }
    },
  };

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'With expertise to develop seamless web application solutions, Sparkout Tech is a forerunner and one of the Top Web App Development Companies. We curate solutions that address and resolve your business demands easing every operation seamlessly. Connect with us now and get your business requirement sorted all at once. ',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'web app development, web application development company, web application development services, custom web app development service, Laravel website development company, nodejs web application development services, top web app development companies, angular js web app development services, progressive web apps agency'});
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Top Web App Development Company Creating Robust Solution To Relentlessly Carryout Business Operations.',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.sparkouttech.com/web-application-development/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'With expertise to develop seamless web application solutions, Sparkout Tech is a forerunner and one of the Top Web App Development Companies. We curate solutions that address and resolve your business demands easing every operation seamlessly. Connect with us now and get your business requirement sorted all at once. ',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'With expertise to develop seamless web application solutions, Sparkout Tech is a forerunner and one of the Top Web App Development Companies. We curate solutions that address and resolve your business demands easing every operation seamlessly. Connect with us now and get your business requirement sorted all at once. ',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.sparkouttech.com/',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Top Web App Development Company Creating Robust Solution To Relentlessly Carryout Business Operations. ',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'With expertise to develop seamless web application solutions, Sparkout Tech is a forerunner and one of the Top Web App Development Companies. We curate solutions that address and resolve your business demands easing every operation seamlessly. Connect with us now and get your business requirement sorted all at once. ',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.sparkouttech.com/web-application-development/'
    );
    AOS.init();
    this.selectedlisted = this.menulist[0];
    this.techlisted = this.technologystack[0];
  }
  openmenu(menulist: any) {
    this.selectedlisted = menulist;
  }
  opentechnology(techmenu: any) {
    console.log(techmenu);
    this.techlisted = techmenu;
  }
  showTab = 1;
  tabToggle(showTab: any) {
    this.showTab = showTab;
  }

  show = true;
  scroll() {
    this.viewportScroller.scrollToAnchor('travel');

    console.log('test top');
  }
}

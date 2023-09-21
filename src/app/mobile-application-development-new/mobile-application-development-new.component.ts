import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { transition, style, animate, trigger } from '@angular/animations';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

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
  selector: 'app-mobile-application-development-new',
  templateUrl: './mobile-application-development-new.component.html',
  styleUrls: ['./mobile-application-development-new.component.css'],
  animations: [fadeIn, fadeOut],
  providers: [NgbAccordionConfig],
})
export class MobileApplicationDevelopmentNewComponent implements OnInit {

  title = 'Mobile app development company - Accelerate Your Business with Custom Mobile App development services';

  technologystack = [
    'AI/ML',
    'Cloud',
    'Blockchain',
    'IoT',
    'AR/VR/MR',
    'Data Analytics',
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
    autoplaySpeed: 5000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  };


  industriesOptions: OwlOptions = {
    loop: true,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    items: 4,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    autoplaySpeed: 3000,
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      400: {
        margin: 25,
        items: 2,
      },
      767: {
        margin: 30,
        items: 3,
      },
      1199: {
        margin: 34,
        items: 4,
      },
    },
  };

  solutionsOptions: OwlOptions = {
    loop: true,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    items: 4,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    autoplaySpeed: 3000,
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
        items: 3,
      },
      1199: {
        margin: 34,
        items: 4,
      },
    },
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

  ngOnInit(): void {
    AOS.init();
    this.techlisted = this.technologystack[0];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Do you want to create an effective and scalable mobile app? We are a prominent mobile app development company providing custom mobile app development services based on your requirements, budget & time.' });
    this.meta.updateTag({ name: 'keywords', content: 'mobile app development company,mobile app development services, Mobile app development agency, Mobile app development firm, App development company, Application development company, App development firm, App development agency' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Mobile app development company - Accelerate Your Business with Custom Mobile App development services' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/mobile-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Do you want to create an effective and scalable mobile app? We are a prominent mobile app development company providing custom mobile app development services based on your requirements, budget & time.' });
    this.meta.updateTag({ property: 'og:type', content: 'Mobile app development company - Accelerate Your Business with Custom Mobile App development services' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Mobile app development company - Accelerate Your Business with Custom Mobile App development services' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Do you want to create an effective and scalable mobile app? We are a prominent mobile app development company providing custom mobile app development services based on your requirements, budget & time.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/mobile-application-development/");
  };

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

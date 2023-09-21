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
  selector: 'app-ui-ux-development-new',
  templateUrl: './ui-ux-development-new.component.html',
  styleUrls: ['./ui-ux-development-new.component.css'],
  animations: [fadeIn, fadeOut],
  providers: [NgbAccordionConfig],
})
export class UiUxDevelopmentNewComponent implements OnInit {
  title =
    'UI/UX design services -  Hire UI/UX  design company that shapes your business  | Sparkout Tech';
  menulist = [
    'Real Estate',
    'Travel',
    'Sports',
    'Social Networking',
    'Fintech',
    'Media & Entertainment',
    'Transportation & Logistics',
    'Healthcare Solutions',
  ];
  technologystack = [
    'Containerization',
    'CI/CD',
    'Infrastructure Automation',
    'Monitoring',
    'Log Management',
    'Performance and Security',
    'Scripting Language',
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
    loop: false,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    items: 2,
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
    loop: true,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    items: 4,
    smartSpeed: 1000,
    autoplaySpeed: 5000,
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      480: {
        margin: 25,
        items: 2,
      },
      991: {
        margin: 25,
        items: 4,
      },
      1199: {
        margin: 30,
        items: 4,
      },
      1350: {
        margin: 34,
        items: 4,
      },
    },
  };
  reviewoneOptions: OwlOptions = {
    loop: true,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    items: 3,
    smartSpeed: 1000,
    autoplaySpeed: 5000,
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      480: {
        margin: 25,
        items: 2,
      },
      991: {
        margin: 25,
        items: 3,
      },
      1199: {
        margin: 30,
        items: 3,
      },
      1350: {
        margin: 34,
        items: 3,
      },
    },
  };

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Ui&ux development company, Ui&ux development services, Ui&ux development, Ui&ux design services, ui&ux design company',
    });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'UI/UX design services -  Hire UI/UX  design company that shapes your business  | Sparkout Tech',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.sparkouttech.com/ui-ux-development/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.',
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
        'UI/UX design services -  Hire UI/UX  design company that shapes your business  | Sparkout Tech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.sparkouttech.com/ui-ux-development/'
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

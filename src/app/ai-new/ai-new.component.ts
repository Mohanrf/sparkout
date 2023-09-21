import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { transition, style, animate, trigger } from '@angular/animations';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';
import { ViewportScroller } from '@angular/common';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-ai-new',
  templateUrl: './ai-new.component.html',
  styleUrls: ['./ai-new.component.css'],
  animations: [fadeIn, fadeOut],
  providers: [NgbAccordionConfig],
})
export class AiNewComponent implements OnInit {
  title =
    'AI development company - Accelerate Your Growth with our Cutting-Edge AI Development Services';
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
    'Frameworks & Libraries',
    'Platforms',
    'Data Management',
    'Methodologies & Algorithms',
    'UI Tools',
    'Languages / Environments',
    'Neural Networks',
  ];
  techlisted: any;
  selectedlisted: any;
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    config: NgbAccordionConfig,
    private viewportScroller: ViewportScroller
  ) {}
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

  ngOnInit(): void {
    AOS.init();
    this.selectedlisted = this.menulist[0];
    this.techlisted = this.technologystack[0];
    this.titleService.setTitle(this.title);

    this.meta.updateTag({
      name: 'description',
      content:
        'Experience the cutting-edge capabilities of artificial intelligence with our AI development company. We specialize in delivering innovative solutions that harness the power of AI to transform industries & drive business success.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'ai development company, artificial intelligence development company, ai software development, ai development services, ai software development company, artificial intelligence development services   ',
    });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'AI development company - Accelerate Your Growth with our Cutting-Edge AI Development Services',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.sparkouttech.com/artificial-intelligence-application-development-company/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Experience the cutting-edge capabilities of artificial intelligence with our AI development company. We specialize in delivering innovative solutions that harness the power of AI to transform industries & drive business success.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'Experience the cutting-edge capabilities of artificial intelligence with our AI development company. We specialize in delivering innovative solutions that harness the power of AI to transform industries & drive business success.',
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
        'AI development company - Accelerate Your Growth with our Cutting-Edge AI Development Services',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Experience the cutting-edge capabilities of artificial intelligence with our AI development company. We specialize in delivering innovative solutions that harness the power of AI to transform industries & drive business success.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL('https://www.sparkouttech.com/artificial-intelligence-application-development-company/');
  }
  openmenu(menulist: any) {
    this.selectedlisted = menulist;
  }
  opentechnology(techmenu: any) {
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

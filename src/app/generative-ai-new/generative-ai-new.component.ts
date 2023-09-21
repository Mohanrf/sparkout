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
  selector: 'app-generative-ai-new',
  templateUrl: './generative-ai-new.component.html',
  styleUrls: ['./generative-ai-new.component.css'],
  animations: [fadeIn, fadeOut],
  providers: [NgbAccordionConfig],
})
export class GenerativeAiNewComponent {

  title = 'Generative AI Development company - Sparkout Tech';
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
    'DL Frameworks',
    'Modules/Toolkits',
    'Libraries',
    'Image Classification  Models',
    'Generative AI Models',
    'Algorithms',
    'Neural Networks',
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

  portfolioOptions: OwlOptions = {
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
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'Sparkout Tech is a  leading generative AI development company with the team of expertise Generative AI developers and data scientists who can provide customised AI models, algorithm development training data collection, and data processing solution ',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'DevOps services &solution, devops sevice provider, Hire DevOps Engineers, devops services. devops consulting services',
    });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Generative AI Development company - Sparkout Tech',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.sparkouttech.com/generative-ai-development/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Sparkout Tech is a  leading generative AI development company with the team of expertise Generative AI developers and data scientists who can provide customised AI models, algorithm development training data collection, and data processing solution ',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'Sparkout Tech is a  leading generative AI development company with the team of expertise Generative AI developers and data scientists who can provide customised AI models, algorithm development training data collection, and data processing solution ',
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
        'Generative AI Development company - Sparkout Tech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Sparkout Tech is a  leading generative AI development company with the team of expertise Generative AI developers and data scientists who can provide customised AI models, algorithm development training data collection, and data processing solution ',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.sparkouttech.com/generative-ai-development/'
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

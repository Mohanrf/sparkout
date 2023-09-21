import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { transition, style, animate, trigger } from '@angular/animations';
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
  selector: 'app-qa-and-testing-new',
  templateUrl: './qa-and-testing-new.component.html',
  styleUrls: ['./qa-and-testing-new.component.css'],
  animations: [fadeIn, fadeOut],
})
export class QaAndTestingNewComponent implements OnInit {
  title =
    'QA and Software Testing Company - Avail our services for a full on Software testing | Sparkout Tech';
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService
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
    autoplaySpeed: 4000,
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

  brandsOptions: OwlOptions = {
    loop: true,
    margin: 86,
    autoplay: false,
    center: false,
    dots: false,
    items: 5,
    responsive: {
      0: {
        margin: 20,
        items: 2,
      },
      480: {
        margin: 30,
        items: 3,
      },
      767: {
        margin: 40,
        items: 4,
      },
      1199: {
        margin: 50,
        items: 5,
      },
    },
  };

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testing services and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'software testing company, software testing services, software testing and quality assurance engineer, software quality assurance company, QA services company, QA software testing services  ',
    });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'QA and Software Testing Company - Avail our services for a full on Software testing | Sparkout Tech',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.sparkouttech.com/quality-assurance-and-testing-services/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testing services and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testing services and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.',
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
        'QA and Software Testing Company - Avail our services for a full on Software testing | Sparkout Tech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testing services and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.sparkouttech.com/quality-assurance-and-testing-services/'
    );
    AOS.init();
  }
}

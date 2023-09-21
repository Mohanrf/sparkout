import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-park-case-studies',
  templateUrl: './park-case-studies.component.html',
  styleUrls: ['./park-case-studies.component.css']
})
export class ParkCaseStudiesComponent implements OnInit {

  title = 'Find the space with the basic requirements with us - Park app';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Don’t let your shopping trip, dinner outing, or market visit turn into a parking hunt. Heading out? With Park, you can reserve the best spot for yourself wherever you go. By booking your slot in advance, you can save time as you drive to and from a place. Choose the new way of parking, choose the smart way of parking, choose PARK .' });
    this.meta.updateTag({ name: 'keywords', content: 'parking app case study, travel, transportation, tracking' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Find the space with the basic requirements with us - Park app' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/parking-app-case-study/' });
    this.meta.updateTag({ property: 'og:description', content: 'Don’t let your shopping trip, dinner outing, or market visit turn into a parking hunt. Heading out? With Park, you can reserve the best spot for yourself wherever you go. By booking your slot in advance, you can save time as you drive to and from a place. Choose the new way of parking, choose the smart way of parking, choose PARK .' });
    this.meta.updateTag({ property: 'og:type', content: 'Don’t let your shopping trip, dinner outing, or market visit turn into a parking hunt. Heading out? With Park, you can reserve the best spot for yourself wherever you go. By booking your slot in advance, you can save time as you drive to and from a place. Choose the new way of parking, choose the smart way of parking, choose PARK .' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Find the space with the basic requirements with us - Park app' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Don’t let your shopping trip, dinner outing, or market visit turn into a parking hunt. Heading out? With Park, you can reserve the best spot for yourself wherever you go. By booking your slot in advance, you can save time as you drive to and from a place. Choose the new way of parking, choose the smart way of parking, choose PARK .' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/parking-app-case-study/");
  }
  /*testmonial*/
  testmonial: OwlOptions = {
    loop: true,
    margin:50,
    autoplay:true,
    center: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
  }
}

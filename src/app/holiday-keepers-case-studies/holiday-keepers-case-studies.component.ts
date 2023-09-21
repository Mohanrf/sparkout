import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-holiday-keepers-case-studies',
  templateUrl: './holiday-keepers-case-studies.component.html',
  styleUrls: ['./holiday-keepers-case-studies.component.css']
})
export class HolidayKeepersCaseStudiesComponent implements OnInit {

  title = 'Perfect solution for your perfect stay - Holiday Keepers';


  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Holiday Keepers brings you the best of holiday rentals for you and your family. We understand the value of unwinding, and we bring you an experience that stays with you. Come and holiday with us at Keepers.' });
    this.meta.updateTag({ name: 'keywords', content: 'rental software case study, vacation rental platform, vacationt rental software development case study' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Perfect solution for your perfect stay - Holiday Keepers' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/vacation-rental-platform-case-study-holiday-keepers/' });
    this.meta.updateTag({ property: 'og:description', content: 'Holiday Keepers brings you the best of holiday rentals for you and your family. We understand the value of unwinding, and we bring you an experience that stays with you. Come and holiday with us at Keepers.' });
    this.meta.updateTag({ property: 'og:type', content: 'Holiday Keepers brings you the best of holiday rentals for you and your family. We understand the value of unwinding, and we bring you an experience that stays with you. Come and holiday with us at Keepers.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Perfect solution for your perfect stay - Holiday Keepers' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Holiday Keepers brings you the best of holiday rentals for you and your family. We understand the value of unwinding, and we bring you an experience that stays with you. Come and holiday with us at Keepers.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/vacation-rental-platform-case-study-holiday-keepers/");
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

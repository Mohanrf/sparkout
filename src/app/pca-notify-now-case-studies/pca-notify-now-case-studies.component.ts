import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-pca-notify-now-case-studies',
  templateUrl: './pca-notify-now-case-studies.component.html',
  styleUrls: ['./pca-notify-now-case-studies.component.css']
})
export class PcaNotifyNowCaseStudiesComponent implements OnInit {

  title = 'Building Financial Connect with Notifiers and Creditors Of The Desceased - Notify Now';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'We deploy solutions based on the industry and the data, Notify now, being associated with death records of US, we can help you derive software solutions for your business through our expertise. Connect with us now to deploy your application suporting your business venture.' });
    this.meta.updateTag({ name: 'keywords', content: 'death record management app, death record management software, fintech' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Building Financial Connect with Notifiers and Creditors Of The Desceased - Notify Now' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/death-record-management-case-study-notifynow/' });
    this.meta.updateTag({ property: 'og:description', content: 'We deploy solutions based on the industry and the data, Notify now, being associated with death records of US, we can help you derive software solutions for your business through our expertise. Connect with us now to deploy your application suporting your business venture.' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Building Financial Connect with Notifiers and Creditors Of The Desceased - Notify Now' });
    this.meta.updateTag({ name: 'twitter:description', content: 'We deploy solutions based on the industry and the data, Notify now, being associated with death records of US, we can help you derive software solutions for your business through our expertise. Connect with us now to deploy your application suporting your business venture.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/death-record-management-case-study-notifynow/");
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

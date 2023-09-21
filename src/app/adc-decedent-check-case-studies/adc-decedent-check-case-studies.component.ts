import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-adc-decedent-check-case-studies',
  templateUrl: './adc-decedent-check-case-studies.component.html',
  styleUrls: ['./adc-decedent-check-case-studies.component.css']
})
export class AdcDecedentCheckCaseStudiesComponent implements OnInit {

  title = 'Death Record Management Solution To Preeced With Cliaming Procedures - ADC';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'In association with PCA, we are deriving global solutions that are simple, ADC is an efficent death record comunicator helping creditors find nominess and proceed further. Unlike this we are open to also develop customized and effienceint solutions for you. Connect now. ' });
    this.meta.updateTag({ name: 'keywords', content: 'death record confirmation web application, fintech, banking, finance, casestudy' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Death Record Management Solution To Preeced With Cliaming Procedures - ADC' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/decedent-check-case-study-adc/' });
    this.meta.updateTag({ property: 'og:description', content: 'In association with PCA, we are deriving global solutions that are simple, ADC is an efficent death record comunicator helping creditors find nominess and proceed further. Unlike this we are open to also develop customized and effienceint solutions for you. Connect now. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Death Record Management Solution To Preeced With Cliaming Procedures - ADC' });
    this.meta.updateTag({ name: 'twitter:description', content: 'In association with PCA, we are deriving global solutions that are simple, ADC is an efficent death record comunicator helping creditors find nominess and proceed further. Unlike this we are open to also develop customized and effienceint solutions for you. Connect now. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/decedent-check-case-study-adc/");
  }

  /*testmonial*/
  testmonial: OwlOptions = {
    loop: true,
    margin:50,
    autoplay:true,
    center: false,
    dots: true,
    responsive:{
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


import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-firstblastit-case-study',
  templateUrl: './firstblastit-case-study.component.html',
  styleUrls: ['./firstblastit-case-study.component.css']
})
export class FirstblastitCaseStudyComponent implements OnInit {

  title = 'Proffesional Audio Rcording and Listening application - First Blast It';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Redefining the abilities of entertainment and building utmost professional solutions for podcaster, this was a education based solution with storage managements and automatic outlist option, while we could customize similar proffessional solutions for you at Sparkout tech. contact us today! ' });
    this.meta.updateTag({ name: 'keywords', content: 'podcast recording software,  digital audio app, podcast stream application' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Proffesional Audio Rcording and Listening application - First Blast It' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/firstblastit-case-study/' });
    this.meta.updateTag({ property: 'og:description', content: 'Redefining the abilities of entertainment and building utmost professional solutions for podcaster, this was a education based solution with storage managements and automatic outlist option, while we could customize similar proffessional solutions for you at Sparkout tech. contact us today! ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Proffesional Audio Rcording and Listening application - First Blast It' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Redefining the abilities of entertainment and building utmost professional solutions for podcaster, this was a education based solution with storage managements and automatic outlist option, while we could customize similar proffessional solutions for you at Sparkout tech. contact us today! ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/firstblastit-case-study/");
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

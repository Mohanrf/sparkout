
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-layeronex-case-study',
  templateUrl: './layeronex-case-study.component.html',
  styleUrls: ['./layeronex-case-study.component.css']
})
export class LayeronexCaseStudyComponent implements OnInit {

    title = 'Execution Plan Of A Developer Community Platform Developed At Sparkout';

    constructor(
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'Developer Community Platform was curated  for users in the development sector to effectively operate, build their community and professional profiles stronger. We at Sparkout Tech are intended to curate creative solutions based on business requirements empowered by technology. Tap to know more about us!  ' });
      this.meta.updateTag({ name: 'keywords', content: '' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Execution Plan Of A Developer Community Platform Developed At Sparkout' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/layeronex-case-study/' });
      this.meta.updateTag({ property: 'og:description', content: 'Developer Community Platform was curated  for users in the development sector to effectively operate, build their community and professional profiles stronger. We at Sparkout Tech are intended to curate creative solutions based on business requirements empowered by technology. Tap to know more about us!  ' });
      this.meta.updateTag({ property: 'og:type', content: 'Website' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Execution Plan Of A Developer Community Platform Developed At Sparkout' });
      this.meta.updateTag({ name: 'twitter:description', content: 'Developer Community Platform was curated  for users in the development sector to effectively operate, build their community and professional profiles stronger. We at Sparkout Tech are intended to curate creative solutions based on business requirements empowered by technology. Tap to know more about us!  ' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/layeronex-case-study/");
    }

  }


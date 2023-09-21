import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-pwas',
    templateUrl: './pwas.component.html',
    styleUrls: ['./pwas.component.css']
  })
  export class PwasBlogComponent implements OnInit {

   title = 'Power Up Your Business Ecosystem With Progressive Web App Development | Sparkout';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Progressive Web App Development is ahead of the curve, allowing brands and businesses to establish themselves exclusively. Dig deep to discover more about the rise of PWA in the meta-era.' });
        this.meta.updateTag({ name: 'keywords', content: 'progressive web apps, future of PWA, Progressive Web App Development' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Power Up Your Business Ecosystem With Progressive Web App Development | Sparkout' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/progressive-web-apps-rise/' });
        this.meta.updateTag({ property: 'og:description', content: 'Progressive Web App Development is ahead of the curve, allowing brands and businesses to establish themselves exclusively. Dig deep to discover more about the rise of PWA in the meta-era.' });
        this.meta.updateTag({ property: 'og:type', content: 'Progressive Web App Development is ahead of the curve, allowing brands and businesses to establish themselves exclusively. Dig deep to discover more about the rise of PWA in the meta-era.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/pwas-blog/pwas-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Power Up Your Business Ecosystem With Progressive Web App Development | Sparkout' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Progressive Web App Development is ahead of the curve, allowing brands and businesses to establish themselves exclusively. Dig deep to discover more about the rise of PWA in the meta-era.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/pwas-blog/pwas-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/progressive-web-apps-rise/");
      }
  }

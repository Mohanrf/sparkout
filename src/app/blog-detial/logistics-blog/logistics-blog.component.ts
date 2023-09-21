import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-logistics-blog',
    templateUrl: './logistics-blog.component.html',
    styleUrls: ['./logistics-blog.component.css']
  })
  export class LogisticsBlogComponent implements OnInit {

   title = '5 digital trends transforming the logistics industry | Sparkout Techh';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'The trends in logistics provide real-time data, and they continue to transform traditional logistical processes throughout the supply chain and learn more about the five digital trends that transform the logistics industry.' });
        this.meta.updateTag({ name: 'keywords', content: 'trends in logistics, digital trends transforming logistic industry, logistics industry trends for 2022, logistics industry trends' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: '5 digital trends transforming the logistics industry | Sparkout Techh' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/digital-trends-transforming-logistics-industry/' });
        this.meta.updateTag({ property: 'og:description', content: 'The trends in logistics provide real-time data, and they continue to transform traditional logistical processes throughout the supply chain and learn more about the five digital trends that transform the logistics industry.' });
        this.meta.updateTag({ property: 'og:type', content: 'The trends in logistics provide real-time data, and they continue to transform traditional logistical processes throughout the supply chain and learn more about the five digital trends that transform the logistics industry.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/logistics-blog/logistics-blog-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: '5 digital trends transforming the logistics industry | Sparkout Techh' });
        this.meta.updateTag({ name: 'twitter:description', content: 'The trends in logistics provide real-time data, and they continue to transform traditional logistical processes throughout the supply chain and learn more about the five digital trends that transform the logistics industry.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/logistics-blog/logistics-blog-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/digital-trends-transforming-logistics-industry/");
      }
  }

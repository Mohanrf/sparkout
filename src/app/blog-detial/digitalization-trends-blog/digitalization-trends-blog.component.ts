import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-digitalization-trends-blog',
    templateUrl: './digitalization-trends-blog.component.html',
    styleUrls: ['./digitalization-trends-blog.component.css']
  })
  export class DigitalizationTrendsBlogComponent implements OnInit {

   title = '10 digital trends that enhance manufacturing industries to the next level | Sparkout';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Digitalization in manufacturing is a solution to the buzzing and critical deadlines faced in the manufacturing industry. Explore the latest trends in digital trends in manufacturing industries, which have curbed the industry to a safe space.' });
        this.meta.updateTag({ name: 'keywords', content: 'Digital Transformation of Manufacturing Industries Trends, Digitalization in manufacturing, Manufacturing industries and digitalization, Digital trends in manufacturing industries' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: '10 digital trends that enhance manufacturing industries to the next level | Sparkout' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/digital-transformation-of-manufacturing-industries/' });
        this.meta.updateTag({ property: 'og:description', content: 'Digitalization in manufacturing is a solution to the buzzing and critical deadlines faced in the manufacturing industry. Explore the latest trends in digital trends in manufacturing industries, which have curbed the industry to a safe space.' });
        this.meta.updateTag({ property: 'og:type', content: 'Digitalization in manufacturing is a solution to the buzzing and critical deadlines faced in the manufacturing industry. Explore the latest trends in digital trends in manufacturing industries, which have curbed the industry to a safe space.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/digitalization-trends-blog/digitalization-trends-blog-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: '10 digital trends that enhance manufacturing industries to the next level | Sparkout' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Digitalization in manufacturing is a solution to the buzzing and critical deadlines faced in the manufacturing industry. Explore the latest trends in digital trends in manufacturing industries, which have curbed the industry to a safe space.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/digitalization-trends-blog/digitalization-trends-blog-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/digital-transformation-of-manufacturing-industries/");
      }
  }

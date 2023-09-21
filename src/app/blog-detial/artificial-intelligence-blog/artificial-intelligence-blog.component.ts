import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-artificial-intelligence-blog',
    templateUrl: './artificial-intelligence-blog.component.html',
    styleUrls: ['./artificial-intelligence-blog.component.css']
  })
  export class ArtificialIntelligenceBlogComponent implements OnInit {

   title = 'The 5 solutions on how Artificial intelligence helps businesses | Sparkout Tech';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'The impact of artificial intelligence on business is fully implemented. However, this is the moment to make sure that your business is prepared to keep up with the new trends. You can rest assured that the benefits of artificial intelligence in business are here to stay.' });
        this.meta.updateTag({ name: 'keywords', content: 'How Artificial intelligence helps businesses, impact of Artificial intelligence on business, Benefits of Artificial intelligence in business' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'The 5 solutions on how Artificial intelligence helps businesses | Sparkout Tech' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/artificial-intelligence-in-business/' });
        this.meta.updateTag({ property: 'og:description', content: 'The impact of artificial intelligence on business is fully implemented. However, this is the moment to make sure that your business is prepared to keep up with the new trends. You can rest assured that the benefits of artificial intelligence in business are here to stay.' });
        this.meta.updateTag({ property: 'og:type', content: 'The impact of artificial intelligence on business is fully implemented. However, this is the moment to make sure that your business is prepared to keep up with the new trends. You can rest assured that the benefits of artificial intelligence in business are here to stay.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/artificial-intelligence-blog/artificial-intelligence-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'The 5 solutions on how Artificial intelligence helps businesses | Sparkout Tech' });
        this.meta.updateTag({ name: 'twitter:description', content: 'The impact of artificial intelligence on business is fully implemented. However, this is the moment to make sure that your business is prepared to keep up with the new trends. You can rest assured that the benefits of artificial intelligence in business are here to stay.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/artificial-intelligence-blog/artificial-intelligence-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/artificial-intelligence-in-business/");
      }
  }

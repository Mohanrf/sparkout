import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-npd-process-blog',
    templateUrl: './npd-process-blog.component.html',
    styleUrls: ['./npd-process-blog.component.css']
  })
  export class NpdProcessBlogComponent implements OnInit {

   title = '7 stages of new product development process to start an online startup product | Sparkout Tech';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'To run a new product development process successfully in the market? Build the seven stages of new product development. You can use this to plan your product development phases.' });
        this.meta.updateTag({ name: 'keywords', content: '7 stages of new product development, 7 stages of new product development process, Importance of new product development, New product development process, new product development stages' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: '7 stages of new product development process to start an online startup product | Sparkout Tech' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/stages-of-new-product-development-process/' });
        this.meta.updateTag({ property: 'og:description', content: 'To run a new product development process successfully in the market? Build the seven stages of new product development. You can use this to plan your product development phases.' });
        this.meta.updateTag({ property: 'og:type', content: 'To run a new product development process successfully in the market? Build the seven stages of new product development. You can use this to plan your product development phases.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/npd/npd-banner.png' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: '7 stages of new product development process to start an online startup product | Sparkout Tech' });
        this.meta.updateTag({ name: 'twitter:description', content: 'To run a new product development process successfully in the market? Build the seven stages of new product development. You can use this to plan your product development phases.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/npd/npd-banner.png' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/stages-of-new-product-development-process/");
      }
  }

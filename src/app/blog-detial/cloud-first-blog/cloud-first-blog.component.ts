import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-cloud-first-blog',
    templateUrl: './cloud-first-blog.component.html',
    styleUrls: ['./cloud-first-blog.component.css']
  })
  export class CloudFirstBlogComponent implements OnInit {

   title = 'Why is it better to cloud smart than cloud first?';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'While implementing a cloud storage system to incite the maxim of your application, let us here discover which leads to better progress—Cloud Smart vs. Cloud First. Check out this blog.' });
        this.meta.updateTag({ name: 'keywords', content: 'Cloud strategy, application transformation, Benefits of Cloud-Smart vs Cloud-First, cloud technology' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Why is it better to cloud smart than cloud first?' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/why-its-better-to-be-cloud-smart-than-cloud-first/' });
        this.meta.updateTag({ property: 'og:description', content: 'While implementing a cloud storage system to incite the maxim of your application, let us here discover which leads to better progress—Cloud Smart vs. Cloud First. Check out this blog.' });
        this.meta.updateTag({ property: 'og:type', content: 'While implementing a cloud storage system to incite the maxim of your application, let us here discover which leads to better progress—Cloud Smart vs. Cloud First. Check out this blog.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/cloud-first-blog/cloud-smart-blog-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Why is it better to cloud smart than cloud first?' });
        this.meta.updateTag({ name: 'twitter:description', content: 'While implementing a cloud storage system to incite the maxim of your application, let us here discover which leads to better progress—Cloud Smart vs. Cloud First. Check out this blog.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/cloud-first-blog/cloud-smart-blog-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/why-its-better-to-be-cloud-smart-than-cloud-first/");
      }
  }

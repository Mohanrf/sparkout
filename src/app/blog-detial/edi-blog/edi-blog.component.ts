import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-edi-blog',
    templateUrl: './edi-blog.component.html',
    styleUrls: ['./edi-blog.component.css']
  })
  export class EdiBlogComponent implements OnInit {

   title = 'EDI Interactions Standing As The Future For Business Transfers Over All Networks | Sparkout Tech';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'With technological advancements, there are new trends standing on toes every now and then. While EDI integrations are evolving to meet the requirements of the new-age networks. Discover how EDI helps businesses in this era and its capabilities to be more productive, through this blog, Dive in deep!' });
        this.meta.updateTag({ name: 'keywords', content: 'What is electronic data interchange (EDI)?, Electronic data interchange, Future of EDI, EDI integration' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'EDI Interactions Standing As The Future For Business Transfers Over All Networks | Sparkout Tech' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/everything-you-need-to-know-about-edi/' });
        this.meta.updateTag({ property: 'og:description', content: 'With technological advancements, there are new trends standing on toes every now and then. While EDI integrations are evolving to meet the requirements of the new-age networks. Discover how EDI helps businesses in this era and its capabilities to be more productive, through this blog, Dive in deep!' });
        this.meta.updateTag({ property: 'og:type', content: 'With technological advancements, there are new trends standing on toes every now and then. While EDI integrations are evolving to meet the requirements of the new-age networks. Discover how EDI helps businesses in this era and its capabilities to be more productive, through this blog, Dive in deep!' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/edi-blog/edi-blog-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'EDI Interactions Standing As The Future For Business Transfers Over All Networks | Sparkout Tech' });
        this.meta.updateTag({ name: 'twitter:description', content: 'With technological advancements, there are new trends standing on toes every now and then. While EDI integrations are evolving to meet the requirements of the new-age networks. Discover how EDI helps businesses in this era and its capabilities to be more productive, through this blog, Dive in deep!' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/edi-blog/edi-blog-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/everything-you-need-to-know-about-edi/");
      }
  }

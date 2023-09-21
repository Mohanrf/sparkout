import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-wealth-management-digital-transformation-blog',
    templateUrl: './wealth-management-digital-transformation-blog.component.html',
    styleUrls: ['./wealth-management-digital-transformation-blog.component.css']
  })
  export class WealthManagementDigitalTransformationBlogComponent implements OnInit {

   title = 'Digital transformation is ushering in significant changes in wealth management | Sparkout';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Digital transformation in wealth management is driving significant growth in the industry through personalized and engaging digital experiences that cater to changing consumer expectations. Read the blog to know more.' });
        this.meta.updateTag({ name: 'keywords', content: 'Digital transformation in wealth management, Digitalisation in wealth management, Digital transformation in wealth and asset management, Digital transformation in wealth management industry' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Digital transformation is ushering in significant changes in wealth management | Sparkout' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/wealth-management-digital-transformation/' });
        this.meta.updateTag({ property: 'og:description', content: 'Digital transformation in wealth management is driving significant growth in the industry through personalized and engaging digital experiences that cater to changing consumer expectations. Read the blog to know more.' });
        this.meta.updateTag({ property: 'og:type', content: 'Digital transformation in wealth management is driving significant growth in the industry through personalized and engaging digital experiences that cater to changing consumer expectations. Read the blog to know more.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/digital-transformation-blog/digital-transformation-is-opening-up-new-avenues-for-wealth-management-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Digital transformation is ushering in significant changes in wealth management | Sparkout' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Digital transformation in wealth management is driving significant growth in the industry through personalized and engaging digital experiences that cater to changing consumer expectations. Read the blog to know more.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/digital-transformation-blog/digital-transformation-is-opening-up-new-avenues-for-wealth-management-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/wealth-management-digital-transformation/");
      }
  }

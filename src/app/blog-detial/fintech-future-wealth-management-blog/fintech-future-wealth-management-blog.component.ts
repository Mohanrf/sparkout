
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-fintech-future-wealth-management-blog',
  templateUrl: './fintech-future-wealth-management-blog.component.html',
  styleUrls: ['./fintech-future-wealth-management-blog.component.css']
})
export class FintechFutureWealthManagementBlogComponent implements OnInit {

     title = 'Future Of Wealth Management - Wealth Managers Need To Know The Abilities Of Fintech | Sparkout';

        constructor(
          public router: Router,
          private titleService: Title,
          private meta: Meta,
          private canonicalService: CanonicalService) { }

        ngOnInit(): void {
          this.titleService.setTitle(this.title);
          this.meta.updateTag({ name: 'description', content: 'Go paper-free, and support the effort and time with Fintech in wealth management. The era demands digitalizing things, and we at Sparkout Tech have immersed ourselves in rendering the upscaling provided with our services. Wealth managers out there, check this out, and connect now! ' });
          this.meta.updateTag({ name: 'keywords', content: 'Impact of fintech in wealth management, fintech in wealth management, future of wealth management' });
          this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
          this.meta.updateTag({ name: 'robots', content: 'index, follow' });

          this.meta.updateTag({ property: 'og:title', content: 'Future Of Wealth Management - Wealth Managers Need To Know The Abilities Of Fintech | Sparkout' });
          this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
          this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/fintech-future-wealth-management/' });
          this.meta.updateTag({ property: 'og:description', content: 'Go paper-free, and support the effort and time with Fintech in wealth management. The era demands digitalizing things, and we at Sparkout Tech have immersed ourselves in rendering the upscaling provided with our services. Wealth managers out there, check this out, and connect now! ' });
          this.meta.updateTag({ property: 'og:type', content: 'Go paper-free, and support the effort and time with Fintech in wealth management. The era demands digitalizing things, and we at Sparkout Tech have immersed ourselves in rendering the upscaling provided with our services. Wealth managers out there, check this out, and connect now! ' });
          this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/fintech-future-wealth-management-blog/wealth-management-banner.jpg' });

          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
          this.meta.updateTag({ name: 'twitter:title', content: 'Future Of Wealth Management - Wealth Managers Need To Know The Abilities Of Fintech | Sparkout' });
          this.meta.updateTag({ name: 'twitter:description', content: 'Go paper-free, and support the effort and time with Fintech in wealth management. The era demands digitalizing things, and we at Sparkout Tech have immersed ourselves in rendering the upscaling provided with our services. Wealth managers out there, check this out, and connect now! ' });
          this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/fintech-future-wealth-management-blog/wealth-management-banner.jpg' });

          // Add Canonical tag
          this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/fintech-future-wealth-management/");
        }
    }

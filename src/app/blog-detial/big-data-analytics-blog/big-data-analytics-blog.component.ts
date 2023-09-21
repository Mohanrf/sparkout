
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-big-data-analytics-blog',
  templateUrl: './big-data-analytics-blog.component.html',
  styleUrls: ['./big-data-analytics-blog.component.css']
})
export class BigDataAnalyticsBlogComponent implements OnInit {

   title = 'Take Your Asset Management Plan to the Next Level With Big Data.';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'There are no areas where AI and Big Data have not proven their capabilities. Big data analytics maximize investment through the high-level data analysis process of the asset management industry and help users make informed investment decisions. If you are skeptical about its capabilities, you will surely be overwhelmed when you learn more about its possibilities. Read this blog to make better investment decisions on asset management.' });
        this.meta.updateTag({ name: 'keywords', content: 'Big data in asset management, Big data analytics asset management, Data Analytics in asset management' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Take Your Asset Management Plan to the Next Level With Big Data.' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/big-data-analytics-help-asset-management-better-investment-decisions/' });
        this.meta.updateTag({ property: 'og:description', content: 'There are no areas where AI and Big Data have not proven their capabilities. Big data analytics maximize investment through the high-level data analysis process of the asset management industry and help users make informed investment decisions. If you are skeptical about its capabilities, you will surely be overwhelmed when you learn more about its possibilities. Read this blog to make better investment decisions on asset management.' });
        this.meta.updateTag({ property: 'og:type', content: 'There are no areas where AI and Big Data have not proven their capabilities. Big data analytics maximize investment through the high-level data analysis process of the asset management industry and help users make informed investment decisions. If you are skeptical about its capabilities, you will surely be overwhelmed when you learn more about its possibilities. Read this blog to make better investment decisions on asset management.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/big-data-analytics-blog/big-data-analytics-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Take Your Asset Management Plan to the Next Level With Big Data.' });
        this.meta.updateTag({ name: 'twitter:description', content: 'There are no areas where AI and Big Data have not proven their capabilities. Big data analytics maximize investment through the high-level data analysis process of the asset management industry and help users make informed investment decisions. If you are skeptical about its capabilities, you will surely be overwhelmed when you learn more about its possibilities. Read this blog to make better investment decisions on asset management.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/big-data-analytics-blog/big-data-analytics-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/big-data-analytics-help-asset-management-better-investment-decisions/");
      }
  }


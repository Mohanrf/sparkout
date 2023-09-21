import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-changing-landscape-investment-banking-fintech-blog',
  templateUrl: './changing-landscape-investment-banking-fintech-blog.component.html',
  styleUrls: ['./changing-landscape-investment-banking-fintech-blog.component.css']
})
export class ChangingLandscapeInvestmentBankingFintechBlogComponent implements OnInit {

   title = 'The Impact of Fintech on Investment Banking';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Explore the evolving role of fintech in investment banking and discover how fintech is reshaping the industry. Adapt to the new technological landscape and embrace innovation for success.' });
        this.meta.updateTag({ name: 'keywords', content: 'rise of fintech, fintech investment banking, fintech affect investment banking, fintech change investment banking, banks investing in fintech' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'The Impact of Fintech on Investment Banking' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/changing-landscape-investment-banking-fintech/' });
        this.meta.updateTag({ property: 'og:description', content: 'Explore the evolving role of fintech in investment banking and discover how fintech is reshaping the industry. Adapt to the new technological landscape and embrace innovation for success.' });
        this.meta.updateTag({ property: 'og:type', content: 'Explore the evolving role of fintech in investment banking and discover how fintech is reshaping the industry. Adapt to the new technological landscape and embrace innovation for success.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/changing-landscape-investment-banking-fintech-blog/changing-landscape-investment-banking-fintech-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'The Impact of Fintech on Investment Banking' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Explore the evolving role of fintech in investment banking and discover how fintech is reshaping the industry. Adapt to the new technological landscape and embrace innovation for success.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/changing-landscape-investment-banking-fintech-blog/changing-landscape-investment-banking-fintech-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/changing-landscape-investment-banking-fintech/");
      }
  }




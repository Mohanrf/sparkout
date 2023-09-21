import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-fintech-industry-blog',
    templateUrl: './fintech-industry-blog.component.html',
    styleUrls: ['./fintech-industry-blog.component.css']
  })
  export class FintechIndustryBlogComponent implements OnInit {

   title = 'What Is Making FinTech More Productive? - Technologies Shaping FinTech ';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Major technologies driving the Fintech Industry in the verge of leveling up, demand it to be updated with trend. Here are the six emerging trends that will shape the  future of fintech. Check them to deploy in your business. ' });
        this.meta.updateTag({ name: 'keywords', content: 'Technologies used in FinTech, Major technologies driving the fintech industry, The technology used in digital banking. 6 Emerging Trends That Will Shape the Future of Fintech' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'What Is Making FinTech More Productive? - Technologies Shaping FinTech ' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/technologies-shaping-the-future-of-fintech/' });
        this.meta.updateTag({ property: 'og:description', content: 'Major technologies driving the Fintech Industry in the verge of leveling up, demand it to be updated with trend. Here are the six emerging trends that will shape the  future of fintech. Check them to deploy in your business. ' });
        this.meta.updateTag({ property: 'og:type', content: 'Major technologies driving the Fintech Industry in the verge of leveling up, demand it to be updated with trend. Here are the six emerging trends that will shape the  future of fintech. Check them to deploy in your business. ' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/fintech-blog/fintech-blog-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'What Is Making FinTech More Productive? - Technologies Shaping FinTech ' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Major technologies driving the Fintech Industry in the verge of leveling up, demand it to be updated with trend. Here are the six emerging trends that will shape the  future of fintech. Check them to deploy in your business. ' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/fintech-blog/fintech-blog-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/technologies-shaping-the-future-of-fintech/");
      }
  }

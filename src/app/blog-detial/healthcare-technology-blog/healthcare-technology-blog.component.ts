import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-healthcare-technology-blog',
    templateUrl: './healthcare-technology-blog.component.html',
    styleUrls: ['./healthcare-technology-blog.component.css']
  })
  export class HealthcareTechnologyBlogComponent implements OnInit {

   title = '7 health tech solutions that make the world simpler';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Without a doubt, transformation in digital healthcare technology is moving from a buzzword to a necessity for health systems. These healthcare problems and solutions make the world better and healthier.' });
        this.meta.updateTag({ name: 'keywords', content: 'Digital healthcare technology, health tech innovations, health tech solutions, healthcare technology challenges. Emerging technology in healthcare, healthcare problems, Healthcare problems and solutions, healthcare technology trends ,mobile app development, Technology and healthcare, Use of technology in healthcare, What is the future of technology in healthcare' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: '7 health tech solutions that make the world simpler' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/emerging-digital-health-technology/' });
        this.meta.updateTag({ property: 'og:description', content: 'Without a doubt, transformation in digital healthcare technology is moving from a buzzword to a necessity for health systems. These healthcare problems and solutions make the world better and healthier.' });
        this.meta.updateTag({ property: 'og:type', content: 'Without a doubt, transformation in digital healthcare technology is moving from a buzzword to a necessity for health systems. These healthcare problems and solutions make the world better and healthier.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/healthcare-blog/healthcare-blog-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: '7 health tech solutions that make the world simpler' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Without a doubt, transformation in digital healthcare technology is moving from a buzzword to a necessity for health systems. These healthcare problems and solutions make the world better and healthier.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/healthcare-blog/healthcare-blog-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/emerging-digital-health-technology/");
      }
  }

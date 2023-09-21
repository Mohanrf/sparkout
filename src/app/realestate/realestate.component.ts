import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit {

  title = 'Real Estate Software Developement - Manage the group of Vast Geographies in one | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'We could help you build efficient solutions for your real eastate business, to manage, maintain and hold secured data, we can deal with your requirements and help you build amazing real easte development solution for your business. No more hassle everything in one click, customize your app now with Sparkout Tech' });
      this.meta.updateTag({ name: 'keywords', content: 'real estate application development, real estate software development,  real estate app developers, real estate management system, real estate application development company, real estate app development services' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Real Estate Software Developement - Manage the group of Vast Geographies in one | Sparkout Tech' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/real-estate-application-development/' });
      this.meta.updateTag({ property: 'og:description', content: 'We could help you build efficient solutions for your real eastate business, to manage, maintain and hold secured data, we can deal with your requirements and help you build amazing real easte development solution for your business. No more hassle everything in one click, customize your app now with Sparkout Tech' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Real Estate Software Developement - Manage the group of Vast Geographies in one | Sparkout Tech' });
      this.meta.updateTag({ name: 'twitter:description', content: 'We could help you build efficient solutions for your real eastate business, to manage, maintain and hold secured data, we can deal with your requirements and help you build amazing real easte development solution for your business. No more hassle everything in one click, customize your app now with Sparkout Tech' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/real-estate-application-development/");
    }

  }


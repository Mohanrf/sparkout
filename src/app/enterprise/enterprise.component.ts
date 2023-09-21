import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  title = 'Enterprise Software Development Company -  Enterprise software development services which Upscale your business | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Your business needs are unique and need the right software solutions. Build scalable solutions for your business with a leading enterprise software development company.' });
    this.meta.updateTag({ name: 'keywords', content: 'Enterprise software development company, enterprise software development services, enterprise software development, custom enterprise software development' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Enterprise Software Development Company -  Enterprise software development services which Upscale your business | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/enterprise-software-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Your business needs are unique and need the right software solutions. Build scalable solutions for your business with a leading enterprise software development company.' });
    this.meta.updateTag({ property: 'og:type', content: 'Your business needs are unique and need the right software solutions. Build scalable solutions for your business with a leading enterprise software development company.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Enterprise Software Development Company -  Enterprise software development services which Upscale your business | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Your business needs are unique and need the right software solutions. Build scalable solutions for your business with a leading enterprise software development company.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/enterprise-software-development/");
  }

}


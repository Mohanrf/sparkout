
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})

export class TermsConditionsComponent implements OnInit {

    title = 'Terms and Conditions | Getting to Know the Terms and Conditions Terrain - Sparkout';

    constructor(
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'These terms and conditions govern all online interactions and engagements on Sparkout.tech and focus on visitors who share or collect information while utilizing our website and services.' });
        this.meta.updateTag({ name: 'keywords', content: '' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Terms and Conditions | Getting to Know the Terms and Conditions Terrain - Sparkout' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/terms-conditions/' });
        this.meta.updateTag({ property: 'og:description', content: 'These terms and conditions govern all online interactions and engagements on Sparkout.tech and focus on visitors who share or collect information while utilizing our website and services.' });
        this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Terms and Conditions | Getting to Know the Terms and Conditions Terrain - Sparkout' });
        this.meta.updateTag({ name: 'twitter:description', content: 'These terms and conditions govern all online interactions and engagements on Sparkout.tech and focus on visitors who share or collect information while utilizing our website and services.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/terms-conditions/");
      }

    }


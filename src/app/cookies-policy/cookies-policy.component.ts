import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.css']
})
export class CookiesPolicyComponent implements OnInit {

  title = 'Cookie policy | Your Privacy Matters to Us - Sparkout';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Dunk into data transparency! Learn how our cookies optimize your stay while prioritizing your privacy needs. Check out our Cookies Policy now.' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Cookie policy | Your Privacy Matters to Us - Sparkout' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/cookies-policy/' });
    this.meta.updateTag({ property: 'og:description', content: 'Dunk into data transparency! Learn how our cookies optimize your stay while prioritizing your privacy needs. Check out our Cookies Policy now.' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Cookie policy | Your Privacy Matters to Us - Sparkout' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Dunk into data transparency! Learn how our cookies optimize your stay while prioritizing your privacy needs. Check out our Cookies Policy now.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/cookies-policy/");
  }

}


import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-fintech',
  templateUrl: './fintech.component.html',
  styleUrls: ['./fintech.component.css']
})
export class FintechComponent implements OnInit {

  title = 'Fintech Solutions for modern businesses - Build applications for finance and banking | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Financial products require a lot of attention to detail. Create robust and amazing Fintech applications for the finance industry with our fintech solutions services.' });
    this.meta.updateTag({ name: 'keywords', content: 'fintech app development services, Fintech app development company, fintech solution provider, fintech app development' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Fintech Solutions for modern businesses - Build applications for finance and banking | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/fintech-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Financial products require a lot of attention to detail. Create robust and amazing Fintech applications for the finance industry with our fintech solutions services.' });
    this.meta.updateTag({ property: 'og:type', content: 'Financial products require a lot of attention to detail. Create robust and amazing Fintech applications for the finance industry with our fintech solutions services.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Fintech Solutions for modern businesses - Build applications for finance and banking | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Financial products require a lot of attention to detail. Create robust and amazing Fintech applications for the finance industry with our fintech solutions services.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/fintech-application-development/");
  }

}


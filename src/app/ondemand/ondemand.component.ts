import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-ondemand',
  templateUrl: './ondemand.component.html',
  styleUrls: ['./ondemand.component.css']
})
export class OndemandComponent implements OnInit {

  title = 'Build high-quality mobile & web apps quickly - On-demand app development company | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'We help business build amazing applications for their customers quickly and efficiently. Hire a specialist team from a leading on-demand app development solutions provider.' });
    this.meta.updateTag({ name: 'keywords', content: 'on-demand app development services, on-demand app development solutions, on-demand app development company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Build high-quality mobile & web apps quickly - On-demand app development company | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ property: 'og:description', content: 'We help business build amazing applications for their customers quickly and efficiently. Hire a specialist team from a leading on-demand app development solutions provider.' });
    this.meta.updateTag({ property: 'og:type', content: 'We help business build amazing applications for their customers quickly and efficiently. Hire a specialist team from a leading on-demand app development solutions provider.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Build high-quality mobile & web apps quickly - On-demand app development company | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'We help business build amazing applications for their customers quickly and efficiently. Hire a specialist team from a leading on-demand app development solutions provider.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/");
  }

}

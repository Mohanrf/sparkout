import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';


@Component({
  selector: 'app-business-development-executive',
  templateUrl: './business-development-executive.component.html',
  styleUrls: ['./business-development-executive.component.css']
})
export class BusinessDevelopmentExecutiveComponent implements OnInit {

  title = 'Business Development Executive | Apply for the Business Development Executive Position - Sparkout';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Ready to take our sales process to the next level? Chart your path to success with our Business Development Executive opportunity. Apply today to thrive in a rewarding role.' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Business Development Executive | Apply for the Business Development Executive Position - Sparkout' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/careers/business-development-executive/' });
    this.meta.updateTag({ property: 'og:description', content: 'Ready to take our sales process to the next level? Chart your path to success with our Business Development Executive opportunity. Apply today to thrive in a rewarding role.' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Business Development Executive | Apply for the Business Development Executive Position - Sparkout' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Ready to take our sales process to the next level? Chart your path to success with our Business Development Executive opportunity. Apply today to thrive in a rewarding role.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/careers/business-development-executive/");
  }

}

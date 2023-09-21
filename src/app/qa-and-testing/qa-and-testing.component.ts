import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-qa-and-testing',
  templateUrl: './qa-and-testing.component.html',
  styleUrls: ['./qa-and-testing.component.css']
})
export class QaAndTestingComponent implements OnInit {

  title = 'QA and Software Testing Company - Avail our serivces for a fulllon Software testing | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testign serivces and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.' });
    this.meta.updateTag({ name: 'keywords', content: 'QA services, software testing company, software testing services, QA & software testing company, QA solutions, QA testing as a service' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'QA and Software Testing Company - Avail our serivces for a fulllon Software testing | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/quality-assurance-and-testing-services' });
    this.meta.updateTag({ property: 'og:description', content: 'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testign serivces and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.' });
    this.meta.updateTag({ property: 'og:type', content: 'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testign serivces and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'QA and Software Testing Company - Avail our serivces for a fulllon Software testing | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Want  QA and software testing services for your already existing application? Sparkout Tech can help you render the testign serivces and also help you upscale and advance your solution for the global users meeting their requirements.  Hire QA services experts from our software testing company.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/quality-assurance-and-testing-services");
  }

}

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-web-application-development',
  templateUrl: './web-application-development.component.html',
  styleUrls: ['./web-application-development.component.css']
})
export class WebApplicationDevelopmentComponent implements OnInit {

  title = 'Web application development company - Building custom web application for your business | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Create web applications that users can access easily on any device. Build highly responsive web applications with our web app development services.' });
    this.meta.updateTag({ name: 'keywords', content: 'web application development company, web application development services,web app development services, custom web application development company, custom web application development services, web and mobile app development company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Web application development company - Building custom web application for your business | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/web-application-development' });
    this.meta.updateTag({ property: 'og:description', content: 'Create web applications that users can access easily on any device. Build highly responsive web applications with our web app development services.' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Web application development company - Building custom web application for your business | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Create web applications that users can access easily on any device. Build highly responsive web applications with our web app development services.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/web-application-development");
  }

}

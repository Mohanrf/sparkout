import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-socialnetwork',
  templateUrl: './socialnetwork.component.html',
  styleUrls: ['./socialnetwork.component.css']
})
export class SocialnetworkComponent implements OnInit {

  title = 'Social Media App Development services - Build solvent application Connecting global audience | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'Are you someone more into people and commnunication? having ideas to hub all this together and monitize thorugh a clasy social netowrking platofrm? Sparkout Tech can get your creativity out and develop and crazy cool, social networking application for you to manage and maintain your community in your vibe. Check us out now!' });
      this.meta.updateTag({ name: 'keywords', content: 'Social Media application development services, Social media app development services, Enterprise social networking app development, social media app developers, Social media app development company, build social media app' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Social Media App Development services - Build solvent application Connecting global audience | Sparkout Tech' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/social-media-application-development/' });
      this.meta.updateTag({ property: 'og:description', content: 'Are you someone more into people and commnunication? having ideas to hub all this together and monitize thorugh a clasy social netowrking platofrm? Sparkout Tech can get your creativity out and develop and crazy cool, social networking application for you to manage and maintain your community in your vibe. Check us out now!' });
      this.meta.updateTag({ property: 'og:type', content: 'Website' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Social Media App Development services - Build solvent application Connecting global audience | Sparkout Tech' });
      this.meta.updateTag({ name: 'twitter:description', content: 'Are you someone more into people and commnunication? having ideas to hub all this together and monitize thorugh a clasy social netowrking platofrm? Sparkout Tech can get your creativity out and develop and crazy cool, social networking application for you to manage and maintain your community in your vibe. Check us out now!' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/social-media-application-development/");
    }

  }


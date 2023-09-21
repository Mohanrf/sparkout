import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-ui-ux-development',
  templateUrl: './ui-ux-development.component.html',
  styleUrls: ['./ui-ux-development.component.css']
})
export class UiUxDevelopmentComponent implements OnInit {

  title = 'UI/UX design services -  Hire UI/UX  design company that shapes your business  | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.' });
    this.meta.updateTag({ name: 'keywords', content: 'Ui&ux development company, Ui&ux development services, Ui&ux development, Ui&ux design services, ui&ux design company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'UI/UX design services -  Hire UI/UX  design company that shapes your business  | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/ui-ux-development' });
    this.meta.updateTag({ property: 'og:description', content: 'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.' });
    this.meta.updateTag({ property: 'og:type', content: 'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'UI/UX design services -  Hire UI/UX  design company that shapes your business  | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Provide users with an excellent UI/UX experience integrated by experienced UI/UX development. To help you start your journey, hire a UI/UX development company giving professional UI/UX design serivces.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/ui-ux-development");
  }

}

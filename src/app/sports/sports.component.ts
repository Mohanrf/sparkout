import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../services/canonical.service';

  @Component({
    selector: 'app-sports',
    templateUrl: './sports.component.html',
    styleUrls: ['./sports.component.css']
  })
  export class SportsComponent implements OnInit {

    title = 'Sports App Developement Company - Turning your Sportified ideas and creatity to life | Sparkout Tech';

    constructor(
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Are you crazy about sports, and have always wanted to build an Sport applications. No more delay, fro existing sports to new ideas, we can help your structutre your sport app development and streamline income and also gain huge global traffic. What now? enough of dreaming, reach out to us now.' });
        this.meta.updateTag({ name: 'keywords', content: 'Sports App Development Company, Sports App Developers, sports app design and development, sports mobile application development company, sports app development solutions' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Sports App Developement Company - Turning your Sportified ideas and creatity to life | Sparkout Tech' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/sports-application-development/' });
        this.meta.updateTag({ property: 'og:description', content: 'Are you crazy about sports, and have always wanted to build an Sport applications. No more delay, fro existing sports to new ideas, we can help your structutre your sport app development and streamline income and also gain huge global traffic. What now? enough of dreaming, reach out to us now.' });
        this.meta.updateTag({ property: 'og:type', content: 'Website' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Sports App Developement Company - Turning your Sportified ideas and creatity to life | Sparkout Tech' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Are you crazy about sports, and have always wanted to build an Sport applications. No more delay, fro existing sports to new ideas, we can help your structutre your sport app development and streamline income and also gain huge global traffic. What now? enough of dreaming, reach out to us now.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/sports-application-development/");
      }

    }


import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  title = 'Travel application developement services - Imparting Tourism and travel application needs to the finest  | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'Waana customize a creative embodiment for your users to make their travel and touring cozy and comfortable?and in plans to scale up your business eventuallly through online platfrom. Sparkout tech has got you covered, connect with our experts and design your vibing travel application with 100% custoization facilties. ' });
      this.meta.updateTag({ name: 'keywords', content: 'Travel App Development, Travel Application Development Services, Travel App  Developers, Travel app development company, travel software solutions,' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Travel application developement services - Imparting Tourism and travel application needs to the finest  | Sparkout Tech' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/travel-application-development/' });
      this.meta.updateTag({ property: 'og:description', content: 'Waana customize a creative embodiment for your users to make their travel and touring cozy and comfortable?and in plans to scale up your business eventuallly through online platfrom. Sparkout tech has got you covered, connect with our experts and design your vibing travel application with 100% custoization facilties. ' });
      this.meta.updateTag({ property: 'og:type', content: 'Website' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Travel application developement services - Imparting Tourism and travel application needs to the finest  | Sparkout Tech' });
      this.meta.updateTag({ name: 'twitter:description', content: 'Waana customize a creative embodiment for your users to make their travel and touring cozy and comfortable?and in plans to scale up your business eventuallly through online platfrom. Sparkout tech has got you covered, connect with our experts and design your vibing travel application with 100% custoization facilties. ' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/travel-application-development/");
    }

  }

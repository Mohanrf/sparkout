
  import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../services/canonical.service';


  @Component({
    selector: 'app-casestudy',
    templateUrl: './casestudy.component.html',
    styleUrls: ['./casestudy.component.css']
  })
  export class CasestudyComponent implements OnInit {


    title = 'Start learning with us now with each clients queries - Case study';

    constructor(
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
      this.meta.updateTag({ name: 'keywords', content: 'Case study, Sparkout case studies' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Start learning with us now with each clients queries - Case study' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/case-studies/' });
      this.meta.updateTag({ property: 'og:description', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
      this.meta.updateTag({ property: 'og:type', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Start learning with us now with each clients queries - Case study' });
      this.meta.updateTag({ name: 'twitter:description', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/case-studies/");
    }

  }




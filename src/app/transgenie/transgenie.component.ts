import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-transgenie',
  templateUrl: './transgenie.component.html',
  styleUrls: ['./transgenie.component.css']
})
export class TransgenieComponent implements OnInit {


    title = 'Transgenie - A Modular supply chain & field management Solution for your business | Sparkout Tech';

    constructor(
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'Manage your business supply chain, fleet, and warehouse operations seamlessly with Transgenie, a modular technology solution that leverages advanced technologies like AI, Blockchain, Automation, and more. Get a customized solution that meets your unique business requirements and boosts your bottom line. Try Transgenie today and experience an effortless way to manage your operations. ' });
      this.meta.updateTag({ name: 'keywords', content: 'Transgenie,Delivery dispatch, B2b order management software - 210/mon, Order management software - 1.9K/mon, Order tracking software - 390/mon, Order management platform - 110/mon' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Transgenie - A Modular supply chain & field management Solution for your business | Sparkout Tech' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/transgenie/' });
      this.meta.updateTag({ property: 'og:description', content: 'Manage your business supply chain, fleet, and warehouse operations seamlessly with Transgenie, a modular technology solution that leverages advanced technologies like AI, Blockchain, Automation, and more. Get a customized solution that meets your unique business requirements and boosts your bottom line. Try Transgenie today and experience an effortless way to manage your operations. ' });
      this.meta.updateTag({ property: 'og:type', content: 'Website' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Transgenie - A Modular supply chain & field management Solution for your business | Sparkout Tech' });
      this.meta.updateTag({ name: 'twitter:description', content: 'Manage your business supply chain, fleet, and warehouse operations seamlessly with Transgenie, a modular technology solution that leverages advanced technologies like AI, Blockchain, Automation, and more. Get a customized solution that meets your unique business requirements and boosts your bottom line. Try Transgenie today and experience an effortless way to manage your operations. ' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/transgenie/");
    }

  }

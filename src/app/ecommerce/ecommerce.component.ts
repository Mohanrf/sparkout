import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  title = 'Launch an E-Commerce site - Build your online store with expert developers | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Build your online store quickly with a leading development company. Launch an e-commerce platform and host hundreds of sellers online.' });
    this.meta.updateTag({ name: 'keywords', content: 'ecommerce app development company, ecommerce app development, ecommerce app development services' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Launch an E-Commerce site - Build your online store with expert developers | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/ecommerce-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Build your online store quickly with a leading development company. Launch an e-commerce platform and host hundreds of sellers online.' });
    this.meta.updateTag({ property: 'og:type', content: 'Build your online store quickly with a leading development company. Launch an e-commerce platform and host hundreds of sellers online.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Launch an E-Commerce site - Build your online store with expert developers | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Build your online store quickly with a leading development company. Launch an e-commerce platform and host hundreds of sellers online.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/ecommerce-application-development/");
  }

}


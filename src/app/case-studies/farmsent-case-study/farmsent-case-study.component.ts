import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-farmsent-case-study',
  templateUrl: './farmsent-case-study.component.html',
  styleUrls: ['./farmsent-case-study.component.css']
})
export class FarmsentCaseStudyComponent implements OnInit {

  title = 'Farmsent - A Blockchain for Organic Food Traceability Case Study Connecting Farmers and Buyers Directly';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Farmsent is a blockchain platform connecting farmers with buyers, promoting food security, and prioritizing the farmers. This decentralized marketplace records every step of the process, ensuring secure transactions, and improving food safety and transparency. Experience the future of blockchain in Agriculture case study with Farmsent - Your partner in growth and sustainability.' });
    this.meta.updateTag({ name: 'keywords', content: 'blockchain food traceability case study, blockchain in Agriculture case study, blockchain agriculture tradability case study, Blockchain for organic food traceability case study' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Farmsent - A Blockchain for Organic Food Traceability Case Study Connecting Farmers and Buyers Directly' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/farmsent-case-study/' });
    this.meta.updateTag({ property: 'og:description', content: 'Farmsent is a blockchain platform connecting farmers with buyers, promoting food security, and prioritizing the farmers. This decentralized marketplace records every step of the process, ensuring secure transactions, and improving food safety and transparency. Experience the future of blockchain in Agriculture case study with Farmsent - Your partner in growth and sustainability. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Farmsent - A Blockchain for Organic Food Traceability Case Study Connecting Farmers and Buyers Directly' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Farmsent is a blockchain platform connecting farmers with buyers, promoting food security, and prioritizing the farmers. This decentralized marketplace records every step of the process, ensuring secure transactions, and improving food safety and transparency. Experience the future of blockchain in Agriculture case study with Farmsent - Your partner in growth and sustainability.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/farmsent-case-study/");
  }

}

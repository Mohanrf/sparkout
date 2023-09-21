import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-supply-chain-agility-ever-evolving-world-blog',
  templateUrl: './supply-chain-agility-ever-evolving-world-blog.component.html',
  styleUrls: ['./supply-chain-agility-ever-evolving-world-blog.component.css']
})
export class SupplyChainAgilityEverEvolvingWorldBlogComponent implements OnInit {

  title = 'Agility in Supply Chain Management: Best Practices to Follow';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Post-pandemic and pre-pandemic scenarios are quite different. As most businesses turn to further advances, especially in supply chain management, many decision-makers are improving their supply chain agility to optimize costs and business costs across their organizations, manage risk and increase resilience.' });
    this.meta.updateTag({ name: 'keywords', content: 'supply chain agility, supply chain disruption, supply chain agility examples, agility in supply chain management' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Agility in Supply Chain Management: Best Practices to Follow' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/supply-chain-agility-ever-evolving-world/' });
    this.meta.updateTag({ property: 'og:description', content: 'Post-pandemic and pre-pandemic scenarios are quite different. As most businesses turn to further advances, especially in supply chain management, many decision-makers are improving their supply chain agility to optimize costs and business costs across their organizations, manage risk and increase resilience.' });
    this.meta.updateTag({ property: 'og:type', content: 'Post-pandemic and pre-pandemic scenarios are quite different. As most businesses turn to further advances, especially in supply chain management, many decision-makers are improving their supply chain agility to optimize costs and business costs across their organizations, manage risk and increase resilience.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/supply-chain-agility/supply-chain-agility-banner.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Agility in Supply Chain Management: Best Practices to Follow' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Post-pandemic and pre-pandemic scenarios are quite different. As most businesses turn to further advances, especially in supply chain management, many decision-makers are improving their supply chain agility to optimize costs and business costs across their organizations, manage risk and increase resilience.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/supply-chain-agility/supply-chain-agility-banner.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/supply-chain-agility-ever-evolving-world/");
  }

}

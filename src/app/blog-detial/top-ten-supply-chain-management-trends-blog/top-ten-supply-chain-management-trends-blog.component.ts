import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-top-ten-supply-chain-management-trends-blog',
  templateUrl: './top-ten-supply-chain-management-trends-blog.component.html',
  styleUrls: ['./top-ten-supply-chain-management-trends-blog.component.css']
})
export class TopTenSupplyChainManagementTrendsBlogComponent implements OnInit {

  title = 'Top Supply Chain Management Trends In 2023';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Stay ahead of the curve with the top supply chain management trends in 2023. Explore the latest advancements in automation, blockchain, AI, and more that are shaping the future of supply chains.' });
    this.meta.updateTag({ name: 'keywords', content: 'supply chain management trends, emerging trends in supply chain management, supply chain future trends, trends of supply chain management, supply chain management trends in 2023' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Top Supply Chain Management Trends In 2023' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/top-ten-supply-chain-management-trends/' });
    this.meta.updateTag({ property: 'og:description', content: 'Stay ahead of the curve with the top supply chain management trends in 2023. Explore the latest advancements in automation, blockchain, AI, and more that are shaping the future of supply chains.' });
    this.meta.updateTag({ property: 'og:type', content: 'Stay ahead of the curve with the top supply chain management trends in 2023. Explore the latest advancements in automation, blockchain, AI, and more that are shaping the future of supply chains.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/top-ten-supply-chain/supply-chain-trends-for-2023.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Top Supply Chain Management Trends In 2023' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Stay ahead of the curve with the top supply chain management trends in 2023. Explore the latest advancements in automation, blockchain, AI, and more that are shaping the future of supply chains.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/top-ten-supply-chain/supply-chain-trends-for-2023.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/top-ten-supply-chain-management-trends/");
  }

}

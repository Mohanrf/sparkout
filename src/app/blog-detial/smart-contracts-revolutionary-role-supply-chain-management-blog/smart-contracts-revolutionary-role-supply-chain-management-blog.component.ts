import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-smart-contracts-revolutionary-role-supply-chain-management-blog',
  templateUrl: './smart-contracts-revolutionary-role-supply-chain-management-blog.component.html',
  styleUrls: ['./smart-contracts-revolutionary-role-supply-chain-management-blog.component.css']
})
export class SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent implements OnInit {

  title = 'How are Smart contracts streamlining Supply chain processes?';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Gain valuable insights into the revolutionary role of smart contracts in supply chain management. Dive into their ability to revolutionize and how it empowers businesses to streamline processes and gain a competitive edge.' });
    this.meta.updateTag({ name: 'keywords', content: 'smart contracts in supply chain, supply chain smart contract, smart contract supply chain example, smart contract for supply chain' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'How are Smart contracts streamlining Supply chain processes?' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/smart-contracts-revolutionary-role-supply-chain-management/' });
    this.meta.updateTag({ property: 'og:description', content: 'Gain valuable insights into the revolutionary role of smart contracts in supply chain management. Dive into their ability to revolutionize and how it empowers businesses to streamline processes and gain a competitive edge.' });
    this.meta.updateTag({ property: 'og:type', content: 'Gain valuable insights into the revolutionary role of smart contracts in supply chain management. Dive into their ability to revolutionize and how it empowers businesses to streamline processes and gain a competitive edge.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/smart-contracts-revolutionary/smart-contracts-revolutionary-role-supply-chain-management.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'How are Smart contracts streamlining Supply chain processes?' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Gain valuable insights into the revolutionary role of smart contracts in supply chain management. Dive into their ability to revolutionize and how it empowers businesses to streamline processes and gain a competitive edge.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/smart-contracts-revolutionary/smart-contracts-revolutionary-role-supply-chain-management.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/smart-contracts-revolutionary-role-supply-chain-management/");
  }

}

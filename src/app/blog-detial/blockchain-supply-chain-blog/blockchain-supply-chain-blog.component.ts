  import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-blockchain-supply-chain-blog',
    templateUrl: './blockchain-supply-chain-blog.component.html',
    styleUrls: ['./blockchain-supply-chain-blog.component.css']
  })
  export class BlockchainSupplyChainBlogComponent implements OnInit {

   title = 'Blockchain in Supply Chain Management';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Learn how blockchain is streamlining supply chain management and how it can help businesses stay competitive and adaptable in an increasingly complex and globalized marketplace.' });
        this.meta.updateTag({ name: 'keywords', content: 'blockchain in supply chain, blockchain in supply chain management, blockchain for supply chain management, use of blockchain in supply chain, application of blockchain in supply chain, supply chain management in blockchain, blockchain technology in supply chain management, blockchain technology for supply chain' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Blockchain in Supply Chain Management' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/blockchain-supply-chain-innovations-trends-2023/' });
        this.meta.updateTag({ property: 'og:description', content: 'Learn how blockchain is streamlining supply chain management and how it can help businesses stay competitive and adaptable in an increasingly complex and globalized marketplace.' });
        this.meta.updateTag({ property: 'og:type', content: 'Learn how blockchain is streamlining supply chain management and how it can help businesses stay competitive and adaptable in an increasingly complex and globalized marketplace.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/blockchain-supply-chain-innovations-blog/blockchain-supply-chain-innovations-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Blockchain in Supply Chain Management' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Learn how blockchain is streamlining supply chain management and how it can help businesses stay competitive and adaptable in an increasingly complex and globalized marketplace.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/blockchain-supply-chain-innovations-blog/blockchain-supply-chain-innovations-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/blockchain-supply-chain-innovations-trends-2023/");
      }
  }



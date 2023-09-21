import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-ai-blockchain-shaping-future-technology',
  templateUrl: './ai-blockchain-shaping-future-technology.component.html',
  styleUrls: ['./ai-blockchain-shaping-future-technology.component.css']
})
export class AiBlockchainShapingFutureTechnologyComponent implements OnInit {

  title = 'AI and Blockchain Make the Best Complementary Pair.';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'One of the trending topics today is how blockchain and AI can complement each other. How can they unite who are not related to each other? Blockchain is a decentralized ledger while AI is a branch of computer science. But their use cases and applications are widespread. Together we can reap the benefits of incorporating such innovative technologies.' });
    this.meta.updateTag({ name: 'keywords', content: 'ai and blockchain, blockchain and ai, artificial intelligence and blockchain, blockchain with ai, ai and blockchain technology, blockchain ai use cases' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'AI and Blockchain Make the Best Complementary Pair.' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/ai-blockchain-shaping-future-technology/' });
    this.meta.updateTag({ property: 'og:description', content: 'One of the trending topics today is how blockchain and AI can complement each other. How can they unite who are not related to each other? Blockchain is a decentralized ledger while AI is a branch of computer science. But their use cases and applications are widespread. Together we can reap the benefits of incorporating such innovative technologies.' });
    this.meta.updateTag({ property: 'og:type', content: 'One of the trending topics today is how blockchain and AI can complement each other. How can they unite who are not related to each other? Blockchain is a decentralized ledger while AI is a branch of computer science. But their use cases and applications are widespread. Together we can reap the benefits of incorporating such innovative technologies.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/ai-blockchain-shaping-future/ai-blockchain-shaping-future-banner.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'AI and Blockchain Make the Best Complementary Pair.' });
    this.meta.updateTag({ name: 'twitter:description', content: 'One of the trending topics today is how blockchain and AI can complement each other. How can they unite who are not related to each other? Blockchain is a decentralized ledger while AI is a branch of computer science. But their use cases and applications are widespread. Together we can reap the benefits of incorporating such innovative technologies.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/ai-blockchain-shaping-future/ai-blockchain-shaping-future-banner.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/ai-blockchain-shaping-future-technology/");
  }

}

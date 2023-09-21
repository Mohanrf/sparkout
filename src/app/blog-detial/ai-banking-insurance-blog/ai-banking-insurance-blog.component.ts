  import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-ai-banking-insurance-blog',
    templateUrl: './ai-banking-insurance-blog.component.html',
    styleUrls: ['./ai-banking-insurance-blog.component.css']
  })
  export class AiBankingInsuranceBlogComponent implements OnInit {

   title = '2030 Banking/Insurance - How is AI Shaping Future Banking & Insurance Sector? | Sparkout';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Artificial intelligence is a real game changer in the banking and insurance sectors. AI is playing an important role in the finance industry more than ever before as organizations look for ways to improve the customer experience and increase efficiency across the board. Many fintech companies are turning to artificial intelligence (AI) for many reasons. Here is a detailed note of it, check it out.' });
        this.meta.updateTag({ name: 'keywords', content: 'artificial intelligence in banking, artificial intelligence in insurance,   ai in banking sector, ai in insurance industry, use of ai in banking, ai in banking industry, artificial intelligence in insurance sector' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: '2030 Banking/Insurance - How is AI Shaping Future Banking & Insurance Sector? | Sparkout' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/impact-artificial-intelligence-banking-and-insurance-industry/' });
        this.meta.updateTag({ property: 'og:description', content: 'Artificial intelligence is a real game changer in the banking and insurance sectors. AI is playing an important role in the finance industry more than ever before as organizations look for ways to improve the customer experience and increase efficiency across the board. Many fintech companies are turning to artificial intelligence (AI) for many reasons. Here is a detailed note of it, check it out.' });
        this.meta.updateTag({ property: 'og:type', content: 'Artificial intelligence is a real game changer in the banking and insurance sectors. AI is playing an important role in the finance industry more than ever before as organizations look for ways to improve the customer experience and increase efficiency across the board. Many fintech companies are turning to artificial intelligence (AI) for many reasons. Here is a detailed note of it, check it out.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/ai-in-banking-blog/ai-in-banking-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: '2030 Banking/Insurance - How is AI Shaping Future Banking & Insurance Sector? | Sparkout' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Artificial intelligence is a real game changer in the banking and insurance sectors. AI is playing an important role in the finance industry more than ever before as organizations look for ways to improve the customer experience and increase efficiency across the board. Many fintech companies are turning to artificial intelligence (AI) for many reasons. Here is a detailed note of it, check it out.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/ai-in-banking-blog/ai-in-banking-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/impact-artificial-intelligence-banking-and-insurance-industry/");
      }
  }


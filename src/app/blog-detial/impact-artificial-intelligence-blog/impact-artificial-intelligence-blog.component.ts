import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-impact-artificial-intelligence-blog',
  templateUrl: './impact-artificial-intelligence-blog.component.html',
  styleUrls: ['./impact-artificial-intelligence-blog.component.css']
})
export class ImpactArtificialIntelligenceBlogComponent implements OnInit {
  title = 'The Transformational Impact of AI and ML on Investment Banking';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Discover how artificial intelligence (AI) and machine learning (ML) are revolutionizing investment banking operations & how these advanced technologies are streamlining processes in a fast-paced and dynamic sector.' });
    this.meta.updateTag({ name: 'keywords', content: 'AI and ML in banking, AI and ML in investment banking, Artificial intelligence and Machine learning in banking, AI and ML in the investment banking sector, AI and ML on Investment Banking' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'The Transformational Impact of AI and ML on Investment Banking' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/impact-artificial-intelligence-machine-learning-investment-banking/' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover how artificial intelligence (AI) and machine learning (ML) are revolutionizing investment banking operations & how these advanced technologies are streamlining processes in a fast-paced and dynamic sector.' });
    this.meta.updateTag({ property: 'og:type', content: 'Discover how artificial intelligence (AI) and machine learning (ML) are revolutionizing investment banking operations & how these advanced technologies are streamlining processes in a fast-paced and dynamic sector.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/impact-artificial-intelligence/impact-of-ai-and-ml-on-investment-banking.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'The Transformational Impact of AI and ML on Investment Banking' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Discover how artificial intelligence (AI) and machine learning (ML) are revolutionizing investment banking operations & how these advanced technologies are streamlining processes in a fast-paced and dynamic sector.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/impact-artificial-intelligence/impact-of-ai-and-ml-on-investment-banking.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/impact-artificial-intelligence-machine-learning-investment-banking/");
}
}

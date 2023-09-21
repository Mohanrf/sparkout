import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-generative-ai-future-banking-industry-blog',
  templateUrl: './generative-ai-future-banking-industry-blog.component.html',
  styleUrls: ['./generative-ai-future-banking-industry-blog.component.css']
})
export class GenerativeAiFutureBankingIndustryBlogComponent implements OnInit {

  title = 'Are Banks Ready to Embrace Generative AI?';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Can you believe our future is in the hands of blockchain? This technology has the power to revolutionize industries from scratch, inspire human imaginations and shape our future, including the banking sector. However, we must approach this advance with caution.' });
    this.meta.updateTag({ name: 'keywords', content: 'generative ai in banking industry, ai in banking industry, ai in banking sector, ai in the banking industry, ai for banking industry, artificial intelligence banking sector' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Are Banks Ready to Embrace Generative AI?' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/generative-artificial-intelligence-future-banking-industry/' });
    this.meta.updateTag({ property: 'og:description', content: 'Can you believe our future is in the hands of blockchain? This technology has the power to revolutionize industries from scratch, inspire human imaginations and shape our future, including the banking sector. However, we must approach this advance with caution.' });
    this.meta.updateTag({ property: 'og:type', content: 'Can you believe our future is in the hands of blockchain? This technology has the power to revolutionize industries from scratch, inspire human imaginations and shape our future, including the banking sector. However, we must approach this advance with caution.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/future-banking-industry/generative-ai-future-banking-industry.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Are Banks Ready to Embrace Generative AI?' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Can you believe our future is in the hands of blockchain? This technology has the power to revolutionize industries from scratch, inspire human imaginations and shape our future, including the banking sector. However, we must approach this advance with caution.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/future-banking-industry/generative-ai-future-banking-industry.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/generative-artificial-intelligence-future-banking-industry/");
  }

}

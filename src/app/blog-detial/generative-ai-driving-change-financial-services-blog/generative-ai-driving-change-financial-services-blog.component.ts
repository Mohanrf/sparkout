import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-generative-ai-driving-change-financial-services-blog',
  templateUrl: './generative-ai-driving-change-financial-services-blog.component.html',
  styleUrls: ['./generative-ai-driving-change-financial-services-blog.component.css']
})
export class GenerativeAiDrivingChangeFinancialServicesBlogComponent implements OnInit {

  title = 'How Generative AI is Driving Transformation in the Financial Services Sector';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Discover how generative AI is revolutionizing financial services. Explore the innovative applications and benefits of this technology, where it is reshaping the industry and driving digital transformation.' });
    this.meta.updateTag({ name: 'keywords', content: 'generative ai in financial services, ai in financial services, generative ai in finance, generative ai finance, artificial intelligence in financial services industry' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'How Generative AI is Driving Transformation in the Financial Services Sector' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/generative-ai-driving-change-financial-services/' });
    this.meta.updateTag({ property: 'og:description', content: 'Discover how generative AI is revolutionizing financial services. Explore the innovative applications and benefits of this technology, where it is reshaping the industry and driving digital transformation.' });
    this.meta.updateTag({ property: 'og:type', content: 'Discover how generative AI is revolutionizing financial services. Explore the innovative applications and benefits of this technology, where it is reshaping the industry and driving digital transformation.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/generative-ai/generative-ai-in-financial-services.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'How Generative AI is Driving Transformation in the Financial Services Sector' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Discover how generative AI is revolutionizing financial services. Explore the innovative applications and benefits of this technology, where it is reshaping the industry and driving digital transformation.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/generative-ai/generative-ai-in-financial-services.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/generative-ai-driving-change-financial-services/");
  }

}

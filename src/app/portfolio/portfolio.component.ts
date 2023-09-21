import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  title = 'Portfolio | Our portfolio and success stories - Sparkout ';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Sparkout has worked on numerous projects & built a diverse portfolio from around the world, spanning industries and companies. Every day, we strive to connect & build new businesses with client satisfaction. Explore our work below to see how we went from goals to successes.' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Portfolio | Our portfolio and success stories - Sparkout ' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/portfolio/' });
    this.meta.updateTag({ property: 'og:description', content: 'Sparkout has worked on numerous projects & built a diverse portfolio from around the world, spanning industries and companies. Every day, we strive to connect & build new businesses with client satisfaction. Explore our work below to see how we went from goals to successes.' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Portfolio | Our portfolio and success stories - Sparkout ' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Sparkout has worked on numerous projects & built a diverse portfolio from around the world, spanning industries and companies. Every day, we strive to connect & build new businesses with client satisfaction. Explore our work below to see how we went from goals to successes.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/portfolio/");
  }

}




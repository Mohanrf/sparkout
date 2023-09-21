import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements OnInit {

   title = 'Healthcare Software Development - Developing Worthy solutions to meet healthcare needs | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'The healtcare industry is in need of tech savvy solution to meet the global requreiments and also fight back against new age diseases. If you want to devleop Healthcare related solutions for your busieness and help users themost through it, we at Sparkout tech shall help you currate a highly qualified solution based on your need and requirements. ' });
    this.meta.updateTag({ name: 'keywords', content: 'Healthcare Software Development Services, Healthcare Software Development, Custom Health App Development, custom medical software development, Healthcare Mobile App Developers, Healthcare app Development Services, Healthcare Software Development company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Healthcare Software Development - Developing Worthy solutions to meet healthcare needs | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/healthcare-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'The healtcare industry is in need of tech savvy solution to meet the global requreiments and also fight back against new age diseases. If you want to devleop Healthcare related solutions for your busieness and help users themost through it, we at Sparkout tech shall help you currate a highly qualified solution based on your need and requirements. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Healthcare Software Development - Developing Worthy solutions to meet healthcare needs | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'The healtcare industry is in need of tech savvy solution to meet the global requreiments and also fight back against new age diseases. If you want to devleop Healthcare related solutions for your busieness and help users themost through it, we at Sparkout tech shall help you currate a highly qualified solution based on your need and requirements. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/healthcare-application-development/");
  }

}

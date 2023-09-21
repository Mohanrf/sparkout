import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {

  title = 'Logistics Development Solution - Building simplified and Smart solutions to track big data | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Is not tracking hard in logistics? do you only have authorised distributors or channels? get all this sorted and manage your busienss with an effeicent solution, that answers and meets all you requriments. design this multi- ability solution with us. Connct with Spartout Tech to ge tbetter and upscale your business. ' });
    this.meta.updateTag({ name: 'keywords', content: 'Logistics Development Solution, logistics app development company, logistics app development services.  IT Solutions for Logistics & Distribution Industry, logistics and distribution development company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Logistics Development Solution - Building simplified and Smart solutions to track big data | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/logistics-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Is not tracking hard in logistics? do you only have authorised distributors or channels? get all this sorted and manage your busienss with an effeicent solution, that answers and meets all you requriments. design this multi- ability solution with us. Connct with Spartout Tech to ge tbetter and upscale your business. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Logistics Development Solution - Building simplified and Smart solutions to track big data | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Is not tracking hard in logistics? do you only have authorised distributors or channels? get all this sorted and manage your busienss with an effeicent solution, that answers and meets all you requriments. design this multi- ability solution with us. Connct with Spartout Tech to ge tbetter and upscale your business. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/logistics-application-development/");

  }

}

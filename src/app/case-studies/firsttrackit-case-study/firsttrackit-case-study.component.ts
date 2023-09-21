import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-firsttrackit-case-study',
  templateUrl: './firsttrackit-case-study.component.html',
  styleUrls: ['./firsttrackit-case-study.component.css']
})
export class FirsttrackitCaseStudyComponent implements OnInit {

  title = 'First Track It - Instant Updates On Your Orders';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'A solution compounding instantaneity and safe data management, First Tack It helps its users from tracking orders from step to step. We at Sparkout developed this as a go-to solution for our client, a simple yet sturdy tool.  ' });
    this.meta.updateTag({ name: 'keywords', content: 'real-time production tracking app case study, Production tracking monitoring app case study, Manufacturing process tracking app case study, Production inventory tracking app case study, Production tracking software case study' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'First Track It - Instant Updates On Your Orders' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/firsttrackit-case-study/' });
    this.meta.updateTag({ property: 'og:description', content: 'A solution compounding instantaneity and safe data management, First Tack It helps its users from tracking orders from step to step. We at Sparkout developed this as a go-to solution for our client, a simple yet sturdy tool.  ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'First Track It - Instant Updates On Your Orders' });
    this.meta.updateTag({ name: 'twitter:description', content: 'A solution compounding instantaneity and safe data management, First Tack It helps its users from tracking orders from step to step. We at Sparkout developed this as a go-to solution for our client, a simple yet sturdy tool.  ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/firsttrackit-case-study/");
  }

}

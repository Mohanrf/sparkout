import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-fabvenues-case-study',
  templateUrl: './fabvenues-case-study.component.html',
  styleUrls: ['./fabvenues-case-study.component.css']
})
export class FabvenuesCaseStudyComponent implements OnInit {

  title = 'Fabvenues - The one-stop platform for all your venue booking needs!';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Fabvenues is your one-stop destination for all your venue booking needs. With a comprehensive selection of venues for stays or events, this online platform brings together a diverse range of options to suit your preferences, whether you are an admin, a host, or a traveller. Find the ideal venue for your next stay or event with Fabvenues. ' });
    this.meta.updateTag({ name: 'keywords', content: 'Vacation rental management case study, Property management marketplace case study, Vacation rental property management case study, Vacation rental software success stories, Property management case  study' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Fabvenues - The one-stop platform for all your venue booking needs!' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/fabvenues-case-study/' });
    this.meta.updateTag({ property: 'og:description', content: 'Fabvenues is your one-stop destination for all your venue booking needs. With a comprehensive selection of venues for stays or events, this online platform brings together a diverse range of options to suit your preferences, whether you are an admin, a host, or a traveller. Find the ideal venue for your next stay or event with Fabvenues. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Fabvenues - The one-stop platform for all your venue booking needs!' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Fabvenues is your one-stop destination for all your venue booking needs. With a comprehensive selection of venues for stays or events, this online platform brings together a diverse range of options to suit your preferences, whether you are an admin, a host, or a traveller. Find the ideal venue for your next stay or event with Fabvenues. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/fabvenues-case-study/");
  }

}

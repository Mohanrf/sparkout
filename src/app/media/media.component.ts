import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  title = 'Media and Entertainment Software Development Services - A Customized Bundle of joy you could render your users | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Wanna connect the global audinces? catch their heart beat? pull it in your platform and vitalize on that? here we are, Sparkout Tech a Media & Entertainment App Solution Development Company, rendering software solutions and development services for your ideas and creatives to boom in this highly competitive society. Connect now and explore your abilites much better. ' });
    this.meta.updateTag({ name: 'keywords', content: 'Media and Entertainment Software Development Services, Media and Entertainment Software Development. Media & Entertainment App Solution Development Company, Entertainment App Development' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Media and Entertainment Software Development Services - A Customized Bundle of joy you could render your users | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/media-and-entertainment-application-development/' });
    this.meta.updateTag({ property: 'og:description', content: 'Wanna connect the global audinces? catch their heart beat? pull it in your platform and vitalize on that? here we are, Sparkout Tech a Media & Entertainment App Solution Development Company, rendering software solutions and development services for your ideas and creatives to boom in this highly competitive society. Connect now and explore your abilites much better. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Media and Entertainment Software Development Services - A Customized Bundle of joy you could render your users | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Wanna connect the global audinces? catch their heart beat? pull it in your platform and vitalize on that? here we are, Sparkout Tech a Media & Entertainment App Solution Development Company, rendering software solutions and development services for your ideas and creatives to boom in this highly competitive society. Connect now and explore your abilites much better. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/media-and-entertainment-application-development/");
  }

}

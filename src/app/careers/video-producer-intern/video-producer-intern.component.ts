import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-video-producer-intern',
    templateUrl: './video-producer-intern.component.html',
    styleUrls: ['./video-producer-intern.component.css']
  })
  export class VideoProducerInternComponent implements OnInit {

    title = 'Video producer intern | Make Your Mark as a Video Producer Intern - Sparkout';

    constructor(
      public router: Router,
      private titleService: Title,
      private meta: Meta,
      private canonicalService: CanonicalService) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
      this.meta.updateTag({ name: 'description', content: 'Passionate about video production? Join our dynamic team as a video production intern! Gain hands-on experience, collaborate on exciting projects, and unleash your creativity in a supportive environment.' });
      this.meta.updateTag({ name: 'keywords', content: '' });
      this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });

      this.meta.updateTag({ property: 'og:title', content: 'Video producer intern | Make Your Mark as a Video Producer Intern - Sparkout' });
      this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
      this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/careers/video-producer-intern/' });
      this.meta.updateTag({ property: 'og:description', content: 'Passionate about video production? Join our dynamic team as a video production intern! Gain hands-on experience, collaborate on exciting projects, and unleash your creativity in a supportive environment.' });
      this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
      this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
      this.meta.updateTag({ name: 'twitter:title', content: 'Video producer intern | Make Your Mark as a Video Producer Intern - Sparkout' });
      this.meta.updateTag({ name: 'twitter:description', content: 'Passionate about video production? Join our dynamic team as a video production intern! Gain hands-on experience, collaborate on exciting projects, and unleash your creativity in a supportive environment.' });
      this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

      // Add Canonical tag
      this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/careers/video-producer-intern/");
    }

  }

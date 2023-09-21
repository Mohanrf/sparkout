import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';
@Component({
  selector: 'app-howwework',
  templateUrl: './howwework.component.html',
  styleUrls: ['./howwework.component.css']
})
export class HowweworkComponent implements OnInit {

  title = 'We work with an ambitious mind that needs consistency to help our clients - how we work';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'We’re enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not only our customers but the technology behind it . We believe in working together to be a positive environment which is inspiring to each other. Thus success for us is team work.' });
    this.meta.updateTag({ name: 'keywords', content: 'how we work, sparkout tech' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'We work with an ambitious mind that needs consistency to help our clients - how we work' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/how-we-work/' });
    this.meta.updateTag({ property: 'og:description', content: 'We’re enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not only our customers but the technology behind it . We believe in working together to be a positive environment which is inspiring to each other. Thus success for us is team work.' });
    this.meta.updateTag({ property: 'og:type', content: 'We’re enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not only our customers but the technology behind it . We believe in working together to be a positive environment which is inspiring to each other. Thus success for us is team work.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'We work with an ambitious mind that needs consistency to help our clients - how we work' });
    this.meta.updateTag({ name: 'twitter:description', content: 'We’re enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not only our customers but the technology behind it . We believe in working together to be a positive environment which is inspiring to each other. Thus success for us is team work.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/how-we-work/");
  }

  ourcommunication: OwlOptions = {
    loop: true,
    margin:50,
    autoplay:true,
    nav:false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    },

  }
}

import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css'],
  providers: [NgbAccordionConfig]
})
export class PodcastsComponent implements OnInit {
  blog_category=['All','Software Development','Artificial Intelligence','Machine Learning'];
  blogmenulist:any;

  title = '';

  constructor( public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.blogmenulist=this.blog_category[0];

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: '' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: '' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/podcasts/' });
    this.meta.updateTag({ property: 'og:description', content: '' });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: '' });
    this.meta.updateTag({ name: 'twitter:description', content: '' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/podcasts/");
  }
  blogcatmenu(menus:any){
    this.blogmenulist=menus;
  }

  showTab = 1;
  tabToggle(showTab:any){
    this.showTab =showTab;
  }

  show = true;

  audioList = [
    {
      url: "assets/images/podcasts/audio1.mp3",
      //title: "Creating Smart and Resilient Cities",
      //cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

  audioList2 = [
    {
      url: "assets/images/podcasts/audio2.mp3",
      // title: "Impactful Carbon Trading",
      // cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

  audioList3 = [
    {
      url: "assets/images/podcasts/audio3.mp3",
      // title: "The Definition, the Promise, the Hype",
      // cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

}

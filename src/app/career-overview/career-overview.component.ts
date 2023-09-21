import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-career-overview',
  templateUrl: './career-overview.component.html',
  styleUrls: ['./career-overview.component.css']
})
export class CareerOverviewComponent implements OnInit {

  title = 'Take your career to new heights with Sparkout Tech - Career';

  techlisted: any;

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.techlisted=this.spartontest[0];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Want a workplace where innovation and out-of-the-box thinking take the lead? Explore career opportunities here at Sparkout Tech that for sure will challenge and excite you! Come and experience a healthy workplace combined with a rewarding environment.' });
    this.meta.updateTag({ name: 'keywords', content: 'Career Opportunities at sparkouttech, Web Development Jobs, Web Design Jobs, IT Career, IT Jobs, Career in Software Development, Job Openings at software development ' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Take your career to new heights with Sparkout Tech - Career' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/career/' });
    this.meta.updateTag({ property: 'og:description', content: 'Want a workplace where innovation and out-of-the-box thinking take the lead? Explore career opportunities here at Sparkout Tech that for sure will challenge and excite you! Come and experience a healthy workplace combined with a rewarding environment.' });
    this.meta.updateTag({ property: 'og:type', content: 'Want a workplace where innovation and out-of-the-box thinking take the lead? Explore career opportunities here at Sparkout Tech that for sure will challenge and excite you! Come and experience a healthy workplace combined with a rewarding environment.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Take your career to new heights with Sparkout Tech - Career' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Want a workplace where innovation and out-of-the-box thinking take the lead? Explore career opportunities here at Sparkout Tech that for sure will challenge and excite you! Come and experience a healthy workplace combined with a rewarding environment.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/career/");
  }
  spartontest=['By Words'];

  bywords: OwlOptions = {
    loop: true,
    margin:20,
    autoplay:true,
    center: false,
    dots: false,
    nav:true,
    navText:['<img src="assets/images/ourteam/left-arrow.svg" width="60" height="60">','<img src="assets/images/ourteam/right-arrow.svg" width="60" height="60">'],
    slideBy:1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },

  }
  byvoicetext: OwlOptions = {
    loop: true,
    margin:20,
    autoplay:false,
    center: false,
    dots: false,
    nav:true,
    navText:['<img src="assets/images/ourteam/left-arrow.svg" width="60" height="60">','<img src="assets/images/ourteam/right-arrow.svg" width="60" height="60">'],
    slideBy:1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },

  }
  //testmonial stack
  testmonialview(testmonial:any){
    this.techlisted=testmonial;
  }
}

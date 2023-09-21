import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

declare var AOS: any;
@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {
 techlisted:any

 title = 'The Charming Proffessional Of Sparkout Tech - Explore our Team ';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'The backbones, pillars, strength and the energy of Sparkout Tech. Its not without anybody, but the team is everybody as one, and thats the achivement we could make first for the rest to come and fall. explore our energetic proffesisonals and master minds here. ' });
    this.meta.updateTag({ name: 'keywords', content: 'who we are, sparkout team' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'The Charming Proffessional Of Sparkout Tech - Explore our Team ' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/who-we-are/' });
    this.meta.updateTag({ property: 'og:description', content: 'The backbones, pillars, strength and the energy of Sparkout Tech. Its not without anybody, but the team is everybody as one, and thats the achivement we could make first for the rest to come and fall. explore our energetic proffesisonals and master minds here. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/who-we-are/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'The Charming Proffessional Of Sparkout Tech - Explore our Team ' });
    this.meta.updateTag({ name: 'twitter:description', content: 'The backbones, pillars, strength and the energy of Sparkout Tech. Its not without anybody, but the team is everybody as one, and thats the achivement we could make first for the rest to come and fall. explore our energetic proffesisonals and master minds here. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/who-we-are/");

    AOS.init();
    this.techlisted=this.spartontest[0];
  }
  spartontest=['By Words'];
  //spartontest=['By Words', 'By Voice'];
  ourstrength: OwlOptions = {
    loop: true,
    margin:20,
    autoplay:true,
    center: false,
    dots: false,
    nav:true,
    navText:['<img src="assets/images/ourteam/left-arrow.svg" width="60" height="60">','<img src="assets/images/ourteam/right-arrow.svg" width="60" height="60">'],
    slideBy:6,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      }
    },

  }
  bywords: OwlOptions = {
    loop: true,
    margin:20,
    autoplay:false,
    center: false,
    dots: true,
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
    dots: true,
    lazyLoad:true,
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

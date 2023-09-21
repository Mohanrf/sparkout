import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { Title, Meta } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// import { CanonicalService } from '../services/canonical.service';


// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Mousewheel, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

declare var AOS: any;
@Component({
  selector: 'app-featured-case-study',
  templateUrl: './featured-case-study.component.html',
  styleUrls: ['./featured-case-study.component.css']
})

export class FeaturedCaseStudyComponent implements OnInit {

  //title = 'Start learning with us now with each clients queries - Case study';
  constructor(
    // public router: Router,
    // private titleService: Title,
    // private meta: Meta,
    // private canonicalService: CanonicalService
    ) { }

  swiperEnabled: boolean = true;
  config: SwiperOptions = {
    simulateTouch: false,
    slidesPerView: 1,
    spaceBetween: 0,
    //direction: 'vertical',
    speed: 1200,
    //initialSlide: Number(localStorage.getItem('default_index')) || 0,
    enabled: this.swiperEnabled,
    navigation: true,
    mousewheel: true,
    pagination: { clickable: true },
    allowTouchMove:true,
  };

  featuredCaseStudyOptions: OwlOptions = {
    loop: true,
    margin:50,
    items: 1,
    autoplay:false,
    center: false,
    dots: false,
    smartSpeed: 2000,
    autoHeight: true,
    autoWidth: true
  }

  ngOnInit(): void {
    AOS.init();
    // this.titleService.setTitle(this.title);
    // this.meta.updateTag({ name: 'description', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
    // this.meta.updateTag({ name: 'keywords', content: '' });
    // this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    // this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // this.meta.updateTag({ property: 'og:title', content: 'Start learning with us now with each clients queries - Case study' });
    // this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    // this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/case-studies' });
    // this.meta.updateTag({ property: 'og:description', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
    // this.meta.updateTag({ property: 'og:type', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
    // this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    // this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    // this.meta.updateTag({ name: 'twitter:title', content: 'Start learning with us now with each clients queries - Case study' });
    // this.meta.updateTag({ name: 'twitter:description', content: 'At Sparkout Tech, we pride ourselves on our strong values , adaptability, and dependable leadership. Our customers’ goals are what motivate us to provide solutions for a wide variety of use cases dealing in varied market segments. Don’t take our word for it—discover for yourself through these case studies explaining how customers have successfully deployed our solutions.' });
    // this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/case-studies");
  }
  onSlideChange() {
    console.log('slide change');
  }
}




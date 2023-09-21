import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

declare var AOS: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  title = 'Diving Onto Perfect Numerical About Sparkout Tech Solution';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    AOS.init();
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Sparkout Tech is a fast-growing software development company that keeps culture and creativity at the heart of everything we do. Our mission is to help clients unlock their creativity and build exceptional content using our powerful design platform and our tirelessly helpful support and to help our employees and clients grow by providing a great work-life culture in the industry.' });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Diving Onto Perfect Numerical About Sparkout Tech Solution' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/about-us/' });
    this.meta.updateTag({ property: 'og:description', content: 'Sparkout Tech is a fast-growing software development company that keeps culture and creativity at the heart of everything we do. Our mission is to help clients unlock their creativity and build exceptional content using our powerful design platform and our tirelessly helpful support and to help our employees and clients grow by providing a great work-life culture in the industry.' });
    this.meta.updateTag({ property: 'og:type', content: 'Sparkout Tech is a fast-growing software development company that keeps culture and creativity at the heart of everything we do. Our mission is to help clients unlock their creativity and build exceptional content using our powerful design platform and our tirelessly helpful support and to help our employees and clients grow by providing a great work-life culture in the industry.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Diving Onto Perfect Numerical About Sparkout Tech Solution' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Sparkout Tech is a fast-growing software development company that keeps culture and creativity at the heart of everything we do. Our mission is to help clients unlock their creativity and build exceptional content using our powerful design platform and our tirelessly helpful support and to help our employees and clients grow by providing a great work-life culture in the industry.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/about-us/");
  }

  firstCulture: OwlOptions = {
    loop: true,
    margin:30,
    autoplay: true,
    autoWidth:true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 12000,
    autoplayHoverPause:true,
    dots: false,
    items:4
  }
  secondCulture: OwlOptions = {
    loop: true,
    rtl:true,
    margin:30,
    autoplay: true,
    autoWidth:true,
    slideTransition: 'linear',
    autoplayHoverPause:true,
    autoplayTimeout: 0,
    autoplaySpeed: 12000,
    dots: false,
    items:4
  }
}

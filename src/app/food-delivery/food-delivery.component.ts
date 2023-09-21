import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-food-delivery',
  templateUrl: './food-delivery.component.html',
  styleUrls: ['./food-delivery.component.css'],
})
export class FoodDeliveryComponent implements OnInit {
  title =
    'Online Food Delivery Solution Provider - Leading Food Delivery App Development Company | Sparkout Tech Solutions';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'Start your own online food delivery startup with our robust white-label food delivery app solutions. Reinvent your restaurant business with your own branded food delivery app. Visit us to learn more.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Food delivery app development, Food Delivery App Development Solutions, Online Food Delivery Solution, White Label Food Delivery App Solutions',
    });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Online Food Delivery Solution Provider - Leading Food Delivery App Development Company | Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.sparkouttech.com/online-food-delivery-solution/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Start your own online food delivery startup with our robust white-label food delivery app solutions. Reinvent your restaurant business with your own branded food delivery app. Visit us to learn more.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content:
        'Start your own online food delivery startup with our robust white-label food delivery app solutions. Reinvent your restaurant business with your own branded food delivery app. Visit us to learn more.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.sparkouttech.com/',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Online Food Delivery Solution Provider - Leading Food Delivery App Development Company | Sparkout Tech Solutions',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Start your own online food delivery startup with our robust white-label food delivery app solutions. Reinvent your restaurant business with your own branded food delivery app. Visit us to learn more.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.sparkouttech.com/online-food-delivery-solution/'
    );
  }
}

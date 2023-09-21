import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-order-management-blog',
  templateUrl: './order-management-blog.component.html',
  styleUrls: ['./order-management-blog.component.css']
})
export class OrderManagementBlogComponent implements OnInit {

  title = 'How is Technology Changing the Order Management Process?';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'The advanced order management solutions allow the next-generation business to grow and gain profit seamlessly over time without disruption, are more flexible and choicest for users, and have data-driven solutions to enhance customer satisfaction. Expand your business with advanced technologies like blockchain, ML, and AI.' });
    this.meta.updateTag({ name: 'keywords', content: 'order management system, order management process, CRM order processing, future of order management' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'How is Technology Changing the Order Management Process?' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/future-technology-hold-order-management-systems/' });
    this.meta.updateTag({ property: 'og:description', content: 'The advanced order management solutions allow the next-generation business to grow and gain profit seamlessly over time without disruption, are more flexible and choicest for users, and have data-driven solutions to enhance customer satisfaction. Expand your business with advanced technologies like blockchain, ML, and AI.' });
    this.meta.updateTag({ property: 'og:type', content: 'The advanced order management solutions allow the next-generation business to grow and gain profit seamlessly over time without disruption, are more flexible and choicest for users, and have data-driven solutions to enhance customer satisfaction. Expand your business with advanced technologies like blockchain, ML, and AI.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/order-management-blog/Future-of-TradingTech-Order-Management-System.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'How is Technology Changing the Order Management Process?' });
    this.meta.updateTag({ name: 'twitter:description', content: 'The advanced order management solutions allow the next-generation business to grow and gain profit seamlessly over time without disruption, are more flexible and choicest for users, and have data-driven solutions to enhance customer satisfaction. Expand your business with advanced technologies like blockchain, ML, and AI.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/order-management-blog/Future-of-TradingTech-Order-Management-System.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/future-technology-hold-order-management-systems/");
  }

}

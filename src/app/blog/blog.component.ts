import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = 'Explore the blogs where more informative - Blogs';

  //blog_category=['All','Blockchain','Software Development','E-Commerce','Artificial Intelligence','Delivery App','Cryptocurrency Platform','Travelling Online','React Native App','Machine Learning'];
  blog_category=['All','Fintech','AI','Web app', 'Supply Chain', 'Devops'];
  blogmenulist:any;
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.blogmenulist=this.blog_category[0];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'We make it easier for customers to find businesses through us, and it also gives customers a better understanding of a company and product as well as business updates, so that you can plan your vision well and have the right decisive steps at each level to have a smooth path leading to a successful vision.' });
    this.meta.updateTag({ name: 'keywords', content: 'web application development company, web application development services,web app development services, custom web application development company, custom web application development services, web and mobile app development company' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Explore the blogs where more informative - Blogs' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/blog/' });
    this.meta.updateTag({ property: 'og:description', content: 'We make it easier for customers to find businesses through us, and it also gives customers a better understanding of a company and product as well as business updates, so that you can plan your vision well and have the right decisive steps at each level to have a smooth path leading to a successful vision.' });
    this.meta.updateTag({ property: 'og:type', content: 'We make it easier for customers to find businesses through us, and it also gives customers a better understanding of a company and product as well as business updates, so that you can plan your vision well and have the right decisive steps at each level to have a smooth path leading to a successful vision.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Explore the blogs where more informative - Blogs' });
    this.meta.updateTag({ name: 'twitter:description', content: 'We make it easier for customers to find businesses through us, and it also gives customers a better understanding of a company and product as well as business updates, so that you can plan your vision well and have the right decisive steps at each level to have a smooth path leading to a successful vision.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/blog/");
  }
  blogcatmenu(menus:any){
    this.blogmenulist=menus;
  }
}

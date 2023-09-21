import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent implements OnInit {

  title = 'Turnaround your project for a competitive environment - development methodology';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'We are strongly focused on assisting clients by leveraging the industry with the latest trends and technologies by developing strong web apps and digital solutions. With our hands-on experience we help global clients achieve their goals, We provide custom solutions based on your requirements, that assist in enhancing businesses. Also, we contribute to bring out unique strategies catering business’s needs, customer demands, meeting their deadlines, and budgetary constraints.' });
    this.meta.updateTag({ name: 'keywords', content: 'software Development Methodology, software development process, system development methodologies, project development methodologies, ' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Turnaround your project for a competitive environment - development methodology' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/development-methodology/' });
    this.meta.updateTag({ property: 'og:description', content: 'We are strongly focused on assisting clients by leveraging the industry with the latest trends and technologies by developing strong web apps and digital solutions. With our hands-on experience we help global clients achieve their goals, We provide custom solutions based on your requirements, that assist in enhancing businesses. Also, we contribute to bring out unique strategies catering business’s needs, customer demands, meeting their deadlines, and budgetary constraints.' });
    this.meta.updateTag({ property: 'og:type', content: 'We are strongly focused on assisting clients by leveraging the industry with the latest trends and technologies by developing strong web apps and digital solutions. With our hands-on experience we help global clients achieve their goals, We provide custom solutions based on your requirements, that assist in enhancing businesses. Also, we contribute to bring out unique strategies catering business’s needs, customer demands, meeting their deadlines, and budgetary constraints.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Turnaround your project for a competitive environment - development methodology' });
    this.meta.updateTag({ name: 'twitter:description', content: 'We are strongly focused on assisting clients by leveraging the industry with the latest trends and technologies by developing strong web apps and digital solutions. With our hands-on experience we help global clients achieve their goals, We provide custom solutions based on your requirements, that assist in enhancing businesses. Also, we contribute to bring out unique strategies catering business’s needs, customer demands, meeting their deadlines, and budgetary constraints.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/development-methodology/");
  }

}


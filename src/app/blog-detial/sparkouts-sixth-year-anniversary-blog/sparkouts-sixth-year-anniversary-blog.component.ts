import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-sparkouts-sixth-year-anniversary-blog',
  templateUrl: './sparkouts-sixth-year-anniversary-blog.component.html',
  styleUrls: ['./sparkouts-sixth-year-anniversary-blog.component.css']
})
export class SparkoutsSixthYearAnniversaryBlogComponent implements OnInit {

  title = "A Legacy of Innovation: Sparkout Tech's 6th Year Anniversary";

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: "Sparkout Tech's sixth-year anniversary signifies a milestone of continuous progress and groundbreaking achievements. Celebrate with us as we look back on our journey, delivering transformative tech solutions that shape industries and inspire change." });
    this.meta.updateTag({ name: 'keywords', content: '' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: "A Legacy of Innovation: Sparkout Tech's 6th Year Anniversary" });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/igniting-possibilities-sparkouts-sixth-year-anniversary/' });
    this.meta.updateTag({ property: 'og:description', content: "Sparkout Tech's sixth-year anniversary signifies a milestone of continuous progress and groundbreaking achievements. Celebrate with us as we look back on our journey, delivering transformative tech solutions that shape industries and inspire change." });
    this.meta.updateTag({ property: 'og:type', content: "Sparkout Tech's sixth-year anniversary signifies a milestone of continuous progress and groundbreaking achievements. Celebrate with us as we look back on our journey, delivering transformative tech solutions that shape industries and inspire change." });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/sparkout-6th-year-anniversary/6th-year-anniversary.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: "A Legacy of Innovation: Sparkout Tech's 6th Year Anniversary" });
    this.meta.updateTag({ name: 'twitter:description', content: "Sparkout Tech's sixth-year anniversary signifies a milestone of continuous progress and groundbreaking achievements. Celebrate with us as we look back on our journey, delivering transformative tech solutions that shape industries and inspire change." });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/sparkout-6th-year-anniversary/6th-year-anniversary.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/igniting-possibilities-sparkouts-sixth-year-anniversary/");
}

}

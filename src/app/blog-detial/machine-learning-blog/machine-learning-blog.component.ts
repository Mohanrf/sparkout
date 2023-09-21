import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-machine-learning-blog',
    templateUrl: './machine-learning-blog.component.html',
    styleUrls: ['./machine-learning-blog.component.css']
  })
  export class MachineLearningBlogComponent implements OnInit {

   title = 'Is Machine learning in healthcare revolutionising the future? | Sparkout Tech';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'Healthcare and machine learning are currently impacting the entire world. As a result, it has immense potential and the changes that it could bring to machine learning in healthcare.' });
        this.meta.updateTag({ name: 'keywords', content: 'Future of Healthcare - Machine Learning, Machine learning in Healthcare, Healthcare and Machine learning' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Is Machine learning in healthcare revolutionising the future? | Sparkout Tech' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/machine-learning-in-healthcare/' });
        this.meta.updateTag({ property: 'og:description', content: 'Healthcare and machine learning are currently impacting the entire world. As a result, it has immense potential and the changes that it could bring to machine learning in healthcare.' });
        this.meta.updateTag({ property: 'og:type', content: 'Healthcare and machine learning are currently impacting the entire world. As a result, it has immense potential and the changes that it could bring to machine learning in healthcare.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/machine-blog/machine-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Is Machine learning in healthcare revolutionising the future? | Sparkout Tech' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Healthcare and machine learning are currently impacting the entire world. As a result, it has immense potential and the changes that it could bring to machine learning in healthcare.' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/machine-blog/machine-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/machine-learning-in-healthcare/");
      }
  }

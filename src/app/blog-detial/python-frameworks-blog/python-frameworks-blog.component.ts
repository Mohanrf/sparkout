import { Component, OnInit } from '@angular/core';
  import { Title, Meta } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { CanonicalService } from '../../services/canonical.service';

  @Component({
    selector: 'app-python-frameworks-blog',
    templateUrl: './python-frameworks-blog.component.html',
    styleUrls: ['./python-frameworks-blog.component.css']
  })
  export class PythonFrameworksBlogComponent implements OnInit {

   title = 'Everything you need to know about Python Web Development Frameworks | Sparkout Tech';

      constructor(
        public router: Router,
        private titleService: Title,
        private meta: Meta,
        private canonicalService: CanonicalService) { }

      ngOnInit(): void {
        this.titleService.setTitle(this.title);
        this.meta.updateTag({ name: 'description', content: 'In today’s tech era, Python Web Development Frameworks are climbing to new heights of popularity and have become one of the world’s most popular web development frameworks. It is rapidly ascending, and there is no doubt for the Python web framework to be unparalleled..' });
        this.meta.updateTag({ name: 'keywords', content: 'Python Web Development Frameworks, Frameworks for Web  Development in Python, Python web framework, Python Frameworks for Web Development' });
        this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        this.meta.updateTag({ property: 'og:title', content: 'Everything you need to know about Python Web Development Frameworks | Sparkout Tech' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/python-frameworks/' });
        this.meta.updateTag({ property: 'og:description', content: 'In today’s tech era, Python Web Development Frameworks are climbing to new heights of popularity and have become one of the world’s most popular web development frameworks. It is rapidly ascending, and there is no doubt for the Python web framework to be unparalleled..' });
        this.meta.updateTag({ property: 'og:type', content: 'In today’s tech era, Python Web Development Frameworks are climbing to new heights of popularity and have become one of the world’s most popular web development frameworks. It is rapidly ascending, and there is no doubt for the Python web framework to be unparalleled.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/python-blog/python-banner.jpg' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
        this.meta.updateTag({ name: 'twitter:title', content: 'Everything you need to know about Python Web Development Frameworks | Sparkout Tech' });
        this.meta.updateTag({ name: 'twitter:description', content: 'In today’s tech era, Python Web Development Frameworks are climbing to new heights of popularity and have become one of the world’s most popular web development frameworks. It is rapidly ascending, and there is no doubt for the Python web framework to be unparalleled..' });
        this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/python-blog/python-banner.jpg' });

        // Add Canonical tag
        this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/python-frameworks/");
      }
  }

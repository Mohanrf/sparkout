import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-machine-learning-benefit-order-management-blog',
  templateUrl: './machine-learning-benefit-order-management-blog.component.html',
  styleUrls: ['./machine-learning-benefit-order-management-blog.component.css']
})
export class MachineLearningBenefitOrderManagementBlogComponent implements OnInit {
       title = 'Machine Learning Into Order Management - Benefits And Challenges To Deal ';

          constructor(
            public router: Router,
            private titleService: Title,
            private meta: Meta,
            private canonicalService: CanonicalService) { }

          ngOnInit(): void {
            this.titleService.setTitle(this.title);
            this.meta.updateTag({ name: 'description', content: 'Incorporating Machine learning into Order management systems yields better efficiency in the process and also contributes to other matters as well. Check out the benefits of ML in Order management, here!' });
            this.meta.updateTag({ name: 'keywords', content: 'benefits of machine learning into order management, machine learning in Order management, challenges of machine learning into order to management, ml into order management, ml in order management' });
            this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
            this.meta.updateTag({ name: 'robots', content: 'index, follow' });

            this.meta.updateTag({ property: 'og:title', content: 'Machine Learning Into Order Management - Benefits And Challenges To Deal ' });
            this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
            this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/machine-learning-benefit-order-management/' });
            this.meta.updateTag({ property: 'og:description', content: 'Incorporating Machine learning into Order management systems yields better efficiency in the process and also contributes to other matters as well. Check out the benefits of ML in Order management, here!' });
            this.meta.updateTag({ property: 'og:type', content: 'Incorporating Machine learning into Order management systems yields better efficiency in the process and also contributes to other matters as well. Check out the benefits of ML in Order management, here!' });
            this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/machine-learning-benefit-order-management-blog/machine-learning-benefit-order-management-banner.jpg' });

            this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
            this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
            this.meta.updateTag({ name: 'twitter:title', content: 'Machine Learning Into Order Management - Benefits And Challenges To Deal ' });
            this.meta.updateTag({ name: 'twitter:description', content: 'Incorporating Machine learning into Order management systems yields better efficiency in the process and also contributes to other matters as well. Check out the benefits of ML in Order management, here!' });
            this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/machine-learning-benefit-order-management-blog/machine-learning-benefit-order-management-banner.jpg' });

            // Add Canonical tag
            this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/machine-learning-benefit-order-management/");
          }
      }

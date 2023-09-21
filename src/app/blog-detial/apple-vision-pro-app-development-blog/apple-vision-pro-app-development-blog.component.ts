import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-apple-vision-pro-app-development-blog',
  templateUrl: './apple-vision-pro-app-development-blog.component.html',
  styleUrls: ['./apple-vision-pro-app-development-blog.component.css']
})
export class AppleVisionProAppDevelopmentBlogComponent implements OnInit {

       title = 'Apple Vision Pro Mixed Reality App Development Company - Create Your Immersive App With Us. ';

          constructor(
            public router: Router,
            private titleService: Title,
            private meta: Meta,
            private canonicalService: CanonicalService) { }

          ngOnInit(): void {
            this.titleService.setTitle(this.title);
            this.meta.updateTag({ name: 'description', content: 'With the release of the new Apple Vision Pro headset, the jarring need for Apple Vision Pro Mixed Reality Application development and the Company doing spatial and mixed reality is up. Sparkout tech could help you carve your dream virtual space as you desire with embedded features supporting the new tech headset.  ' });
            this.meta.updateTag({ name: 'keywords', content: 'Apple Vision Pro Development Company, Apple Vision Pro App development company,Apple Vision Pro Mixed Reality App Development Company,Spatial Computing App Development, Spatial Computing App development company, Mixed Reality App Development, Mixed Reality App Development development' });
            this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
            this.meta.updateTag({ name: 'robots', content: 'index, follow' });

            this.meta.updateTag({ property: 'og:title', content: 'Apple Vision Pro Mixed Reality App Development Company - Create Your Immersive App With Us. ' });
            this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
            this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/spatial-computing-app-development-apple-vision-pro/' });
            this.meta.updateTag({ property: 'og:description', content: 'With the release of the new Apple Vision Pro headset, the jarring need for Apple Vision Pro Mixed Reality Application development and the Company doing spatial and mixed reality is up. Sparkout tech could help you carve your dream virtual space as you desire with embedded features supporting the new tech headset.  ' });
            this.meta.updateTag({ property: 'og:type', content: 'With the release of the new Apple Vision Pro headset, the jarring need for Apple Vision Pro Mixed Reality Application development and the Company doing spatial and mixed reality is up. Sparkout tech could help you carve your dream virtual space as you desire with embedded features supporting the new tech headset.  ' });
            this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/apple-vision-pro-app-development-blog/apple-vision-pro-app-development-banner.jpg' });

            this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
            this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
            this.meta.updateTag({ name: 'twitter:title', content: 'Apple Vision Pro Mixed Reality App Development Company - Create Your Immersive App With Us. ' });
            this.meta.updateTag({ name: 'twitter:description', content: 'With the release of the new Apple Vision Pro headset, the jarring need for Apple Vision Pro Mixed Reality Application development and the Company doing spatial and mixed reality is up. Sparkout tech could help you carve your dream virtual space as you desire with embedded features supporting the new tech headset.  ' });
            this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/apple-vision-pro-app-development-blog/apple-vision-pro-app-development-banner.jpg' });

            // Add Canonical tag
            this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/spatial-computing-app-development-apple-vision-pro/");
          }
      }

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-deep-lens-case-study',
  templateUrl: './deep-lens-case-study.component.html',
  styleUrls: ['./deep-lens-case-study.component.css']
})
export class DeepLensCaseStudyComponent implements OnInit {

  title = 'DeepLens Connects Pathologists, And Yours? Get It Done!';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Like Deeplens, Sparkout Tech is building innovative solutions for the world. This is a Customized solution for pathologists and; healthcare app case study. Eventually, we help you develop similar social networking applications for your Profession and businesses. Connect with us today. ' });
    this.meta.updateTag({ name: 'keywords', content: 'case study of AR/VR in the Healthcare sector, VR in the health care case study, future of ar in healthcare, healthcare case studies, healthcare mobile app case study, on-demand healthcare case study, pathologists healthcare app case study, healthcare app case study, mobile medical app case study, mobile health analysis app case study' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'DeepLens Connects Pathologists, And Yours? Get It Done!' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/deeplens-case-study/' });
    this.meta.updateTag({ property: 'og:description', content: 'Like Deeplens, Sparkout Tech is building innovative solutions for the world. This is a Customized solution for pathologists and; healthcare app case study. Eventually, we help you develop similar social networking applications for your Profession and businesses. Connect with us today. ' });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'DeepLens Connects Pathologists, And Yours? Get It Done!' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Like Deeplens, Sparkout Tech is building innovative solutions for the world. This is a Customized solution for pathologists and; healthcare app case study. Eventually, we help you develop similar social networking applications for your Profession and businesses. Connect with us today. ' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/deeplens-case-study/");
  }

}

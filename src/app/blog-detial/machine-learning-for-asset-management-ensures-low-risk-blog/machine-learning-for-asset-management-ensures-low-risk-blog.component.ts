import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-machine-learning-for-asset-management-ensures-low-risk-blog',
  templateUrl: './machine-learning-for-asset-management-ensures-low-risk-blog.component.html',
  styleUrls: ['./machine-learning-for-asset-management-ensures-low-risk-blog.component.css']
})
export class MachineLearningForAssetManagementEnsuresLowRiskBlogComponent implements OnInit {

  title = 'Contribution Of Machine Learning To Financial Risk Management';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'With high risk in Asset management, technologies continue to come and go. Yet their basics lay on AI and Machine Learning. Lets check out how Machine learning can help with Asset management and finances in real-time. Tap to read more.' });
    this.meta.updateTag({ name: 'keywords', content: 'machine learning for asset management, machine learning in risk management, predictive analytics with machine learning, machine learning financial risk management' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Contribution Of Machine Learning To Financial Risk Management' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/machine-learning-for-asset-management-ensures-low-risk/' });
    this.meta.updateTag({ property: 'og:description', content: 'With high risk in Asset management, technologies continue to come and go. Yet their basics lay on AI and Machine Learning. Lets check out how Machine learning can help with Asset management and finances in real-time. Tap to read more.' });
    this.meta.updateTag({ property: 'og:type', content: 'With high risk in Asset management, technologies continue to come and go. Yet their basics lay on AI and Machine Learning. Lets check out how Machine learning can help with Asset management and finances in real-time. Tap to read more.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/machine-learning-for-asset-management/machine-learning-for-asset-management.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Contribution Of Machine Learning To Financial Risk Management' });
    this.meta.updateTag({ name: 'twitter:description', content: 'With high risk in Asset management, technologies continue to come and go. Yet their basics lay on AI and Machine Learning. Lets check out how Machine learning can help with Asset management and finances in real-time. Tap to read more.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/blog-details/machine-learning-for-asset-management/machine-learning-for-asset-management.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/machine-learning-for-asset-management-ensures-low-risk/");
  }

}

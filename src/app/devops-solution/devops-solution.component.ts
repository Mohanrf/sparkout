import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-devops-solution',
  templateUrl: './devops-solution.component.html',
  styleUrls: ['./devops-solution.component.css']
})
export class DevopsSolutionComponent implements OnInit {

  title = 'DevOps consulting services  - Hire DevOps Engineers | Sparkout Tech';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Build secured software solutions quickly and efficiently with DevOps Services. Hire the best DevOps engineers with the right experience.' });
    this.meta.updateTag({ name: 'keywords', content: 'DevOps services &solution, devops sevice provider, Hire DevOps Engineers, devops services. devops consulting services' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Devops consulting services  - Hire DevOps Engineers | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/devops-services/' });
    this.meta.updateTag({ property: 'og:description', content: 'Build secured software solutions quickly and efficiently with DevOps Services. Hire the best DevOps engineers with the right experience.' });
    this.meta.updateTag({ property: 'og:type', content: 'Build secured software solutions quickly and efficiently with DevOps Services. Hire the best DevOps engineers with the right experience.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'DevOps consulting services  - Hire DevOps Engineers | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Build secured software solutions quickly and efficiently with DevOps Services. Hire the best DevOps engineers with the right experience.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/devops-services/");
  }

}

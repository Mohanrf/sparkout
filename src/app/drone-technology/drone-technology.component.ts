import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-drone-technology',
  templateUrl: './drone-technology.component.html',
  styleUrls: ['./drone-technology.component.css']
})
export class DroneTechnologyComponent implements OnInit {

  title = 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech';

  dronemenulist=['Agriculture','Transportation','Renewable Energy','Mining','Oil and Gas','Search & Rescue'];
  techlisted:any;
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) {
  }

  ngOnInit(): void {
    this.techlisted=this.dronemenulist[0];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ name: 'keywords', content: 'Drone software development, drone mapping software, drone software development company, Drone software development services' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/drone-software-development-company/' });
    this.meta.updateTag({ property: 'og:description', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:type', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Drone Mapping Software Development Company - Leverage Visual Data from Terrain | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/drone-software-development-company/");
  }
  dronetag(dmenus:any){
    this.techlisted=dmenus;
  }
}




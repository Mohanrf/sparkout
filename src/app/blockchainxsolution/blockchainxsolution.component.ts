import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-blockchainxsolution',
  templateUrl: './blockchainxsolution.component.html',
  styleUrls: ['./blockchainxsolution.component.css']
})
export class BlockchainxsolutionComponent implements OnInit {

  title = 'Enterprise Blockchain Development Company - Build and Launch Robust Dapps your users will love | Sparkout Tech';

  blisted:any;
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.blisted=this.blockchainmenu[0];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ name: 'keywords', content: 'blockchain development company, blockhain development services, blockchain solution provider' });
    this.meta.updateTag({ name: 'author', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:title', content: 'Enterprise Blockchain Development Company - Build and Launch Robust Dapps your users will love | Sparkout Tech' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Sparkout Tech Solutions' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sparkouttech.com/blockchain-development-company/' });
    this.meta.updateTag({ property: 'og:description', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ property: 'og:type', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'https://www.sparkouttech.com/' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Enterprise Blockchain Development Company - Build and Launch Robust Dapps your users will love | Sparkout Tech' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Are you looking to streamline your steller business with Realiable ? Hire a Blockchain development company who renders blockchain development solutions that upgrade your business !' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.sparkouttech.com/assets/images/twitter-card.jpg' });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL("https://www.sparkouttech.com/blockchain-development-company/");
  }

  blockchainmenu=['Healthcare','Real Estate','FinTech','Education','Social Networks','Ride-sharing Services']
  blockchainxmenu(bmenu:any){
    this.blisted=bmenu;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-footer',
  templateUrl: './second-footer.component.html',
  styleUrls: ['./second-footer.component.css']
})
export class SecondFooterComponent implements OnInit {
  fb:any;
  twitter:any;
  linkedin:any;
  youtube:any;
  github:any;
  instagram:any;
  year:any;
  constructor() { }

  ngOnInit(): void {
    this.fb='https://www.facebook.com/sparkouttech';
    this.twitter='https://twitter.com/sparkouttech';
    this.linkedin='https://www.linkedin.com/company/sparkouttech/';
    this.youtube='https://www.youtube.com/channel/UCzGMg1W9baMFVbAH1bD3XJg';
    this.github='https://github.com/sparkouttech';
    this.instagram='https://www.instagram.com/sparkout_tech/';
  }
  scrollToTop(){
      window.scrollTo(0, 0);
  }
}

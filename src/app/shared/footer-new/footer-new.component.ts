import { Component, OnInit } from '@angular/core';

declare var AOS: any;
@Component({
  selector: 'app-footer-new',
  templateUrl: './footer-new.component.html',
  styleUrls: ['./footer-new.component.css'],
})
export class FooterNewComponent implements OnInit {
  fb: any;
  twitter: any;
  linkedin: any;
  youtube: any;
  github: any;
  instagram: any;
  year: any;
  constructor() {}

  ngOnInit(): void {
    AOS.init();
    this.fb = 'https://www.facebook.com/sparkouttech';
    this.twitter = 'https://twitter.com/sparkouttech';
    this.linkedin = 'https://www.linkedin.com/company/sparkouttech/';
    this.youtube = 'https://www.youtube.com/sparkouttech';
    this.github = 'https://github.com/sparkouttech';
    this.instagram = 'https://www.instagram.com/sparkout_tech/';
    let date = new Date();
    this.year = date.getFullYear();
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

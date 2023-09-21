import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public loading = true;

  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();

    //spiner
    // set dynamic title and meta from title provider service
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log(event,'event');
    //     console.log(TITLE_PROVIDER[event.url].meta);

    //     this.titleService.setTitle(TITLE_PROVIDER[event.url] ? TITLE_PROVIDER[event.url].title : this.defaultTitle);
    //     TITLE_PROVIDER[event.url].meta.forEach((cur:any) => {
    //       this.meta.updateTag(cur)
    //     });
    //     // this.meta.addTags(TITLE_PROVIDER[event.url] ? (TITLE_PROVIDER[event.url].meta) : [],false);
    //   }
    // });
  }
  ngOnInit() {
    // this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.loading = false;
    }, 2500);
  }
}

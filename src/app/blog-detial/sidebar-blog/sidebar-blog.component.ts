import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
//import { NguCarousel } from '@ngu/carousel';



@Component({
  selector: 'app-sidebar-blog',
  templateUrl: './sidebar-blog.component.html',
  styleUrls: ['./sidebar-blog.component.css']
})
export class SidebarBlogComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    [
      CUSTOM_ELEMENTS_SCHEMA,
    ]
  }

  // this.carouselBanner = {
  //   grid: { xs: 1, sm: 1, md: 1, lg: 1, xl:1, all: 0 },
  //   slide: 1,
  //   speed: 400,
  //   interval: 4000,
  //   point: {
  //     visible: true
  //   },
  //   load: 2,
  //   loop: true,
  //   touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
  //   vertical: {
  //     enabled: true,
  //     height: 400
  //   }
  // };

}

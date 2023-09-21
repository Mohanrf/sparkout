import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  obj: any;
  constructor() { }
  ngOnInit(): void {
  }
  blogPost: OwlOptions = {
    loop: true,
    margin:30,
    autoplay:true,
    center: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1600: {
        items: 3,
        margin:40,
      }
    },
  }


}


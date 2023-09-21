import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-case-study-more',
  templateUrl: './case-study-more.component.html',
  styleUrls: ['./case-study-more.component.css']
})
export class CaseStudyMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  casestudymore: OwlOptions = {
    loop: true,
    margin:20,
    autoplay:false,
    center: false,
    dots: true, 
    nav:false,
    slideBy:1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },
    
  }
}

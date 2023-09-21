import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  testMonial: OwlOptions = {
    loop: true,
    autoplay:false,
    //autoplaySpeed: 10000,
    center: false,
    items: 1,
    nav:true,
    navText:["<img src='assets/images/testmonial/prev-arrow.svg' width='50' height='50'>","<img src='assets/images/testmonial/next-arrow.svg' width='50' height='50'>"],
    dots: false,
    responsive: {
      0: {
        margin:10,
      },
      600: {
        margin:50,
      },
      1000: {
        margin:100,
      }
    },

  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

const fadeOut = trigger('fadeOut', [leaveTrans]);

declare var AOS: any;
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations: [fadeIn, fadeOut],
})
export class ReviewsComponent implements OnInit {
  //@ViewChild('crmForm', { static: false }) div1: ElementRef;

  constructor() {}

  reviewsOptions: OwlOptions = {
    loop: false,
    margin:34,
    autoplay:true,
    center: false,
    dots: false,
    nav:true,
    navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
    items:3,
    smartSpeed: 1000,
    autoplaySpeed: 5000,
    responsive: {
      0: {
        margin:20,
        items:1,
      },
      480: {
        margin:25,
        items:2,
      },
      991: {
        margin:25,
        items:3,
      },
      1199: {
        margin:30,
        items:3,
      },
      1350: {
        margin:34,
        items:3,
      }
    },
  };

  ngOnInit(): void {
    AOS.init();
  }
}

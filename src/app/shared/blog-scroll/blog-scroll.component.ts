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
  selector: 'app-blog-scroll',
  templateUrl: './blog-scroll.component.html',
  styleUrls: ['./blog-scroll.component.css'],
  animations: [fadeIn, fadeOut],
})
export class BlogScrollComponent implements OnInit {
  //@ViewChild('crmForm', { static: false }) div1: ElementRef;

  constructor() {}

  blogOptions: OwlOptions = {
    loop: true,
    margin:34,
    autoplay:true,
    center: false,
    dots: false,
    items:3,
    //smartSpeed: 2000,
    autoplaySpeed: 4000,
    nav:false,
    //navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        margin:20,
        items:1,
      },
      480: {
        margin:25,
        items:2,
      },
      767: {
        margin:30,
        items:2,
      },
      1199: {
        margin:34,
        items:3,
      }
    },
  };

  ngOnInit(): void {
    AOS.init();
  }
}

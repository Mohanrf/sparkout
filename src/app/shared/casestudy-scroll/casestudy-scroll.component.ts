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
  selector: 'app-casestudy-scroll',
  templateUrl: './casestudy-scroll.component.html',
  styleUrls: ['./casestudy-scroll.component.css'],
  animations: [fadeIn, fadeOut],
})
export class CasestudyScrollComponent implements OnInit {
  //@ViewChild('crmForm', { static: false }) div1: ElementRef;

  constructor() {}

  casestudyOptions: OwlOptions = {
    loop: true,
    margin: 34,
    autoplay: true,
    center: false,
    dots: false,
    items: 2,
    autoplaySpeed: 4000,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      480: {
        margin: 25,
        items: 2,
      },
      767: {
        margin: 30,
        items: 2,
      },
      1199: {
        margin: 34,
        items: 2,
      },
    },
  };

  ngOnInit(): void {
    AOS.init();
  }
}

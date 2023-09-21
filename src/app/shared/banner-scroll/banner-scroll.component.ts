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
  selector: 'app-banner-scroll',
  templateUrl: './banner-scroll.component.html',
  styleUrls: ['./banner-scroll.component.css'],
  animations: [fadeIn, fadeOut],
})
export class BannerScrollComponent implements OnInit {
  //@ViewChild('crmForm', { static: false }) div1: ElementRef;

  constructor() {}

  bannerOptions: OwlOptions = {
    loop: true,
    margin:0,
    autoplay:true,
    center: false,
    dots: true,
    rewind: false,
    items:1,
    //smartSpeed: 3000,
    autoplaySpeed: 8000,

    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // animateIn: 'slideInLeft',
    // animateOut: 'slideOutRight',

    // slideTransition: 'linear',
    // autoplayTimeout: 0,
    // autoplaySpeed: 15000,
    // autoplayHoverPause:true,
    // autoWidth:true,
    // autoHeight:true,
  };

  ngOnInit(): void {
    AOS.init();
  }
}

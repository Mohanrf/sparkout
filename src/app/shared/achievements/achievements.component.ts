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
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  animations: [fadeIn, fadeOut],
})
export class AchievementsComponent implements OnInit {
  //@ViewChild('crmForm', { static: false }) div1: ElementRef;

  constructor() {}

  achievementsOptions: OwlOptions = {
    loop: false,
    margin:50,
    autoplay:true,
    center: false,
    dots: false,
    items:5,
    responsive: {
      0: {
        margin:20,
        items:2,
      },
      480: {
        margin:20,
        items:3,
      },
      767: {
        margin:20,
        items:5,
      },
      1199: {
        margin:30,
        items:5,
      },
      1350: {
        margin:34,
        items:5,
      }
    },
  };

  ngOnInit(): void {
    AOS.init();
  }
}

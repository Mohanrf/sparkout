
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css']
})
export class HeaderNewComponent implements OnInit {

    constructor(private route:Router) { }

    ngOnInit(): void {
    }
    public isCollapsed = false;
    menuBtn(event:any){
     event.classList.toggle('bi-x');
   }

   onClick(){
    this.route.navigate(['/contact-us'])
   }
   onClick2(){
    this.route.navigate(['/development-methodology'])
   }
   @HostListener('document:click')
  clickout() {
  }
  }


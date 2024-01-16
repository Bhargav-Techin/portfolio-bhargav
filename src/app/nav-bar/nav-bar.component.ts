import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isShow: boolean = true;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
    this.lastScrollTop = scrollTop;
  }

  scrolltoTop(){
    window.scrollTo(0, 0);
  }

  scrolltoButtom(){
    window.scrollTo(0, document.body.scrollHeight);
  }

}

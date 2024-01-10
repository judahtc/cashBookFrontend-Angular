import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  ngOnInit(): void {
    this.checkScreenSize();
  }
  sidebar = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 1024) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
  toggle_sidebar() {
    if (this.sidebar === true) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  data: any;
  key: any;
  value: any;
  constructor(private entriesServies: EntriesService) {}
  ngOnInit(): void {
    this.checkScreenSize();
  }

  sidebar = true;

  // The following code listens to screen size chan
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  // The following code checks screen size for responsiveness purposes
  checkScreenSize() {
    if (window.innerWidth <= 1200) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
  // Enables toggling on small screens
  toggle_sidebar() {
    if (this.sidebar === true) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }

  // Read entries
}

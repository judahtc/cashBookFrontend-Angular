import { Component, OnInit, HostListener } from '@angular/core';
import { EntriesService } from '../entries.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  data: any;
  key: any;
  value: any;
  savings = true;
  bills = false;
  withdrawals = false;
  debts = false;
  credits = false;
  constructor(
    private entriesServies: EntriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.checkScreenSize();

    this.route.queryParams.subscribe((params) => {
      // Access query parameters here
      let nav = params['nav'];
      if (nav == 'savings') {
        this.savings = true;
        this.bills = false;
        this.credits = false;
        this.withdrawals = false;
        this.debts = false;
      } else if (nav == 'bills') {
        this.savings = false;
        this.bills = true;
        this.credits = false;
        this.withdrawals = false;
        this.debts = false;
      } else {
        this.savings = true;
        this.bills = false;
        this.credits = false;
        this.withdrawals = false;
        this.debts = false;
      }
    });
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

  onSavings() {
    this.savings = true;
    this.bills = false;
    this.credits = false;
    this.withdrawals = false;
    this.debts = false;

    this.router.navigate(['/portal/home'], {
      queryParams: { nav: 'savings' },
    });
  }
  onBills() {
    this.savings = false;
    this.bills = true;
    this.credits = false;
    this.withdrawals = false;
    this.debts = false;

    this.router.navigate(['/portal/bills'], {
      queryParams: { nav: 'bills' },
    });
  }
  onCredits() {
    this.savings = false;
    this.bills = false;
    this.credits = true;
    this.withdrawals = false;
    this.debts = false;
  }
  onDebts() {
    this.savings = false;
    this.bills = false;
    this.credits = false;
    this.withdrawals = false;
    this.debts = true;
  }
  onWithdrawals() {
    this.savings = false;
    this.bills = false;
    this.credits = false;
    this.withdrawals = true;
    this.debts = false;
  }

  // Read entries
}

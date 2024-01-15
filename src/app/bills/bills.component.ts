import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { ReusableModalService } from '../reusable-modal.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  bills_list: any;
  constructor(
    private billsService: BillsService,
    private modalService: ReusableModalService
  ) {}
  ngOnInit(): void {
    this.bills();
  }

  bills() {
    this.billsService.bills().subscribe({
      next: (result) => {
        this.bills_list = result;
      },
      error: (error) => {
        alert(error.error.detail);
      },
    });
  }

  addEntryModal(content: any) {
    this.modalService.open(content, 'md');
  }
}

import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { ReusableModalService } from '../reusable-modal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  bills_list: any;
  key: any;
  bill_id: any;
  test_sum: any;
  constructor(
    private billsService: BillsService,
    private modalService: ReusableModalService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.bills();
  }

  bills() {
    this.billsService.bills().subscribe({
      next: (result) => {
        this.test_sum = result;
        // this.test_sum.bills = { sum: '1000' };
        console.log(this.test_sum);

        this.bills_list = result.sort(
          (a: any, b: any) => (b.id as number) - a.id
        );
        // console.log(this.bills_list);
      },
      error: (error) => {
        this.toastr.error(error.error.detail);
      },
    });
  }

  add_bill_element() {
    const bill = document.getElementById('bill') as HTMLInputElement | null;
    const amount = document.getElementById('amount') as HTMLInputElement | null;

    if (bill && amount) {
      this.key = bill.value;
      let value = amount.value;

      let body = {
        bills: {
          [this.key]: value,
        },
      };

      this.billsService.add_bill_element(body, this.bill_id).subscribe({
        next: (result) => {
          this.toastr.success('successfully added');
        },
        error: (error) => {
          this.toastr.error(error.error.detail);
        },
      });
      // Rest of your code using 'body'
    } else {
      console.error('One or both elements not found');
    }
  }

  addEntryModal(content: any, id: any) {
    this.bill_id = id;
    this.modalService.open(content, 'md');
  }
}

import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { ReusableModalService } from '../reusable-modal.service';
import { ToastrService } from 'ngx-toastr';
import { ChartTypeRegistry } from 'chart.js';
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
  x_axis: any;
  y_axis: any;
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

        let billsOnly: { [key: string]: number }[] = this.test_sum.map(
          (item: { bills: { [key: string]: number } }) => item.bills
        );
        let keys: string[] = [];
        let values: number[] = [];

        billsOnly.forEach((bill) => {
          Object.keys(bill).forEach((key) => {
            keys.push(key);
            values.push(bill[key]);
          });
        });

        console.log('Keys:', keys);
        console.log('Values:', values);

        this.x_axis = keys;
        this.y_axis = values;
        console.log(billsOnly);
        this.barChartLabels = this.x_axis;
        this.barChartData = [{ data: this.y_axis, label: 'Bills' }];

        this.bills_list = result.sort(
          (a: any, b: any) => (b.id as number) - a.id
        );
      },
      error: (error) => {
        this.toastr.error(error.error.detail);
      },
    });
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [];
  public barChartType: keyof ChartTypeRegistry = 'bar'; // Assign a valid chart type here
  public barChartLegend = true;
  public barChartData: any;
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

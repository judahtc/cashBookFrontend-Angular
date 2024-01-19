import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReusableModalService } from '../reusable-modal.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  key: any;
  value: any;
  summaries: any;
  constructor(
    private entriesServies: EntriesService,
    private modalService: ReusableModalService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  //@ts-ignore
  form: FormGroup;
  ngOnInit(): void {
    this.read_entries();
    this.entry_summaries();

    this.form = this.fb.group({
      amount: [''],
      category: [''],
      description: [''],
      payment_mode: [''],
      rate: [''],
    });
  }
  // Read entries
  read_entries() {
    this.entriesServies.entries().subscribe((result) => {
      this.data = result;
     
      this.key = Object.keys(this.data[0]);
      this.value.push(Object.values(this.data[0]));
    });
  }

  // Read aggregated entry summaries
  entry_summaries() {
    this.entriesServies.get_summaries().subscribe((result) => {
      this.summaries = result;
    });
  }

  // This function is invocked to pop out a modal
  addEntryModal(content: any) {
    this.modalService.open(content, 'md');
  }
  // Adds a new entry
  addEntry() {
    this.entriesServies.add_entries(this.form.value).subscribe({
      next: (result) => {
        this.toastr.success('successfully added');

        console.log(result);
      },

      error: (error) => {
        this.toastr.error(error.error.detail);
      },
    });
  }
  // filter by
}

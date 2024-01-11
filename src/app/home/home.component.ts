import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  key: any;
  value: any;
  constructor(private entriesServies: EntriesService) {}
  ngOnInit(): void {
    this.read_entries();
  }

  read_entries() {
    this.entriesServies.test().subscribe((result) => {
      this.data = result;

      this.key = Object.keys(this.data[0]);
      this.value.push(Object.values(this.data[0]));
    });
  }
}

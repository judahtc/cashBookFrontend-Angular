import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  base_url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  bills() {
    return this.http.get<any>(this.base_url + '/bills/read');
  }
  get_summaries() {
    return this.http.get<any>(this.base_url + '/entries/aggregation');
  }
  add_entries(body: any) {
    return this.http.post<any>(this.base_url + '/entries/add', body);
  }
  add_bill_element(body: any, record_id: any) {
    return this.http.post<any>(
      this.base_url + '/bills/add_bill/' + record_id,
      body
    );
  }
}

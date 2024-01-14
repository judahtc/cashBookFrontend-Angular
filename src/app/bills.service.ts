import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  base_url = 'http://localhost:8000';
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
}

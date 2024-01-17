import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  base_url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  entries() {
    return this.http.get<any>(this.base_url + '/entries/read');
  }
  get_summaries() {
    return this.http.get<any>(this.base_url + '/entries/aggregation');
  }
  add_entries(body: any) {
    console.log(body);

    return this.http.post<any>(this.base_url + '/entries/add', body);
  }
}

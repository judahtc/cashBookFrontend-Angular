import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  base_url = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  test() {
    return this.http.get<any>(this.base_url + '/entries/read');
  }
}

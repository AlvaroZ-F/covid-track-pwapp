import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  apiUrl = 'https://api.covid19api.com/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}summary`);
  }

  getSpainTimespan(start_date, end_date) {
    return this.http.get(`${this.apiUrl}country/spain/status/confirmed?from=${start_date}T00:00:00Z&to=${end_date}T00:00:00Z`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

    apiUrl = 'https://api.covid19api.com/';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}summary`);
    }

    getSpainTimespan(start_date, end_date) {
        return this.http.get<any>(`${this.apiUrl}country/spain/status/confirmed?from=${start_date}T00:00:00Z&to=${end_date}T00:00:00Z`);
    }

}

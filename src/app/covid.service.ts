import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Global } from './model/global';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

    apiUrl = 'https://api.covid19api.com/';

    constructor(private http: HttpClient) { }

    getAll() {
        this.http.get(`${this.apiUrl}summary`).toPromise().then(data => {
            console.log(data);
            return data;
        });
    }

    getSpainTimespan(start_date, end_date) {
        return this.http.get(`${this.apiUrl}country/spain/status/confirmed?from=${start_date}T00:00:00Z&to=${end_date}T00:00:00Z`).toPromise().then(data => {
            console.log(data);
            return data;
        });
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert("Please check your internet connection!.");
        return throwError(errorMessage);
    }
}

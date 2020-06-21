import { Component } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
    selector: 'app-national',
    templateUrl: 'national.page.html',
    styleUrls: ['national.page.scss']
})
export class NationalPage {

    public country: [];
    public spain_timeline: any = null;
    public spain: any = null;

    constructor(private covidService: CovidService) {
        this.getCountries();
    }

    getCountries() {
        this.covidService.getAll().subscribe(val => {
            this.country = val.Countries;
            console.log(this.country);
        });
    }

    getSpainTimeLine(start_date, end_date) {
        this.covidService.getSpainTimespan(start_date, end_date).subscribe(val => {
            this.spain = val;
        });
    }

    getSpainTotal() {
        this.covidService.getAll().subscribe(val => {
            var temporal_arr = val.Countries;
            temporal_arr.forEach(m => {
                if (m.slug == "spain") {
                    this.spain = m;
				}
			})
		})
	}

}

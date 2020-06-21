import { Component } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
    selector: 'app-national',
    templateUrl: 'national.page.html',
    styleUrls: ['national.page.scss']
})
export class NationalPage {

    public spain_timeline: any = null;
    public spain: any = null;

    public init_date: any;
    public fin_date: any;

    public total_confirmed: number;
    public total_deaths: number;
    public total_recovered: number;

    constructor(private covidService: CovidService) {
        this.getSpainTimeLine(this.init_date, this.fin_date);
        this.getSpainTotal();
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
                if (m.Country == "Spain") {
                    this.total_confirmed = m.TotalConfirmed;
                    this.total_deaths = m.TotalDeaths;
                    this.total_recovered = m.TotalRecovered;
				}
			})
		})
	}

}

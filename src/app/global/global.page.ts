import { Component } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
    selector: 'app-global',
    templateUrl: 'global.page.html',
    styleUrls: ['global.page.scss']
})
export class GlobalPage {

    public Country_Search: any;
    public info_global: any;
    public info_country: any = null;
    public total_confirmed: number;
    public total_deaths: number;
    public total_recovered: number;

    constructor(private covidService: CovidService) {

        this.covidService.getAll().subscribe((val) => {
            this.info_global = val.Global;
            this.total_confirmed = this.info_global.TotalConfirmed;
            this.total_deaths = this.info_global.TotalDeaths;
            this.total_recovered = this.info_global.TotalRecovered;
        });

        this.getCountries();

    }

    getCountries() {
        this.covidService.getAll().subscribe(val => {
            this.info_country = val.Countries;
        });
    }

}

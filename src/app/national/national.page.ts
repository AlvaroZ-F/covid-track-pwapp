import { Component } from '@angular/core';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js'

@Component({
    selector: 'app-national',
    templateUrl: 'national.page.html',
    styleUrls: ['national.page.scss']
})
export class NationalPage {

    public spain_timeline: any = null;
    public spain: any = null;

    public lineChart = [];

    public init_date: any;
    public fin_date: any;

    public total_confirmed: number;
    public total_deaths: number;
    public total_recovered: number;

    public temp_confirmed: number = 0;
    public temp_deaths: number = 0;
    public temp_recovered: number = 0;

    constructor(private covidService: CovidService) {
        this.getSpainTimeLine(this.init_date, this.fin_date);
        this.getSpainTotal();
    }

    getSpainTimeLine(start_date = "2020-03-02T00:00:00Z", end_date = new Date()) {
        this.covidService.getSpainTimespan(start_date, end_date).subscribe(val => {
            this.spain = val;
            console.log(this.spain);
            this.getArrTimeLine();
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

    setDateS(event) {
        this.init_date = event;
        this.getArrTimeLine();
    }
    setDateE(event) {
        this.fin_date = event;
        console.log(event);
        this.getArrTimeLine();
    }

    getArrTimeLine() {
        var confirmed = [], deaths = [], recovered = [];
        var temp = '01';
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        this.spain.forEach(m => {
            if (temp == m.Date.slice(5, 7)) {
                this.temp_confirmed = m.Confirmed;
                this.temp_deaths = m.Deaths;
                this.temp_recovered = m.Recovered;
                arr1.push(this.temp_confirmed);
                arr2.push(this.temp_deaths);
                arr3.push(this.temp_recovered);
            } else {
                var tempn = parseInt(temp);
                tempn++;
                temp = this.zeroFill(tempn, 2);                
                confirmed.push(this.addResults(arr1));
                console.log(confirmed);
                deaths.push(this.addResults(arr2));
                recovered.push(this.addResults(arr3));
			}
        });
        this.GenerateLinechart(confirmed, deaths, recovered);
	}

    GenerateLinechart(confirmed, deaths, recovered) {
        this.lineChart = new Chart('lineChart', {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: 'Total Confirmed Cases',
                        data: confirmed,
                        fill: false,
                        lineTension: 0.1,
                        borderColor: "blue",
                        borderWidth: 1
                    },
                    {
                        label: 'Total Deaths',
                        data: deaths,
                        fill: false,
                        lineTension: 0.1,
                        borderColor: 'red',
                        borderWidth: 1
                    },
                    {
                        label: 'Total Recovered',
                        data: recovered,
                        fill: false,
                        lineTension: 0.1,
                        borderColor: 'green',
                        borderWidth: 1
					}
                ]
            },
            options: {
                title: {
                    text: "Spain Pandemic Timeline",
                    display: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
						}
					}]
				}
			}
        });
    }

    addResults(arr) {
        var cont = 0;
        arr.forEach(m => {
            cont += m;
        });
        return cont;
	}

    zeroFill(number, width) {
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + ""; // always return a string
    }

}

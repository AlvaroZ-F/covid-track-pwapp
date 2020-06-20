import { Component } from '@angular/core';
import { CovidService } from '../covid.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-national',
  templateUrl: 'national.page.html',
  styleUrls: ['national.page.scss']
})
export class NationalPage {

  country: any = null;

  constructor(private covidService: CovidService) {

      this.covidService.getAll();
  }

}

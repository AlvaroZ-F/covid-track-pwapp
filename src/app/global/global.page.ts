import { Component } from '@angular/core';
import { CovidService } from '../covid.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global',
  templateUrl: 'global.page.html',
  styleUrls: ['global.page.scss']
})
export class GlobalPage {

  info: any = null;

  constructor(private covidService: CovidService) {

    this.covidService.getAll().subscribe((data) => {
      console.log(data);
      this.info = data;
    });

  }

}

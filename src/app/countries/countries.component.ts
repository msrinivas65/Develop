import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesData: Object;

  constructor(public service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountriesList().subscribe((res) => {
      if (res) {
        this.countriesData = res;
      }
    })
  }

}

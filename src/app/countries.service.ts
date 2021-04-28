import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(public http: HttpClient) { }

   getCountriesList() {
      return  this.http.get("https://restcountries.eu/rest/v2/all"); 
    }
}

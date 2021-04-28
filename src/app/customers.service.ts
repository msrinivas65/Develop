import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(public http: HttpClient) { }

  getCustomersList() {
    return this.http.get("https://www.w3schools.com/angular/customers.php");
  }
}

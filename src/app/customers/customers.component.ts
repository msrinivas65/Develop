import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  data: Object;

  constructor(public service: CustomersService) { }

  ngOnInit(): void {
    this.getData();
  }
   getData() {
     this.service.getCustomersList().subscribe((res) => {
       this.data = res;
     })
   }

  

}

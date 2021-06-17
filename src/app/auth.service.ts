import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public empdataCount: BehaviorSubject<any> = new BehaviorSubject<any>("srinivas");
  
  constructor() { }

  setEmpDataList(empData) {
    this.empdataCount.next(empData);
  }

  getEmpDataList() {
    return this.empdataCount.asObservable();
  }
}

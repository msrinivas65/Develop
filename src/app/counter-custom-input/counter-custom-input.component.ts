import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { chnageMyName, customIncrementValue } from '../ngrx-counter/counter-actions';
import { getCounterValue } from '../ngrx-counter/counter-selectors';
import { counterInterface } from '../ngrx-counter/counter.states';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.scss']
})
export class CounterCustomInputComponent implements OnInit {
  value : number;
  myName: string;
  constructor(public store: Store<{ counter: counterInterface}>) { }

  ngOnInit(): void {
    this.store.select(getCounterValue).subscribe((myNameIs) => {
      if (myNameIs) {
         this.myName = myNameIs
      }
    })
  }

  Addvalue() {
    this.store.dispatch(customIncrementValue({ counter: +this.value}))
  }

  changeMyName() {
    this.store.dispatch(chnageMyName());
  }

}

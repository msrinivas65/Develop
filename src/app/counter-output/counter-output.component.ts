import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../ngrx-counter/counter-selectors';
import { counterInterface } from '../ngrx-counter/counter.states';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counterValue: number
  constructor(public store: Store<{ counter: counterInterface}>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) => {
      if (data) {
        this.counterValue = data;
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../ngrx-counter/counter-actions';
import { counterInterface } from '../ngrx-counter/counter.states';

@Component({
  selector: 'app-counter-header',
  templateUrl: './counter-header.component.html',
  styleUrls: ['./counter-header.component.scss']
})
export class CounterHeaderComponent implements OnInit {

  constructor(public store: Store<{ counter: counterInterface}>) { }

  ngOnInit(): void {
  }

  Increment() {
    this.store.dispatch(increment());

  }

  Decrement() {
    this.store.dispatch(decrement());
  }
  
  Reset() {
    this.store.dispatch(reset());
  }
}

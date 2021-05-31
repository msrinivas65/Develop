import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterCustomInputComponent } from '../counter-custom-input/counter-custom-input.component';
import { CounterHeaderComponent } from '../counter-header/counter-header.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: CounterHeaderComponent},
];


@NgModule({
  declarations: [
    CounterHeaderComponent,
    CounterOutputComponent,
    CounterCustomInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CounterModule { }

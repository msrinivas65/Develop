import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterHeaderComponent } from './counter-header/counter-header.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'counterHeader', component: CounterHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

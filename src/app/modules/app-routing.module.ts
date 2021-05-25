import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  { path: 'customers', loadChildren: () => import('../modules/customers.module').then(m => m.CustomersModule) },
  { path: 'countries', loadChildren: () => import('../modules/countries.module').then(m => m.CountriesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

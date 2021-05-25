import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CounterHeaderComponent } from './counter-header/counter-header.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterCustomInputComponent } from './counter-custom-input/counter-custom-input.component'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-counter/counter.reducer';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CounterHeaderComponent,
    CounterOutputComponent,
    CounterCustomInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter:counterReducer}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

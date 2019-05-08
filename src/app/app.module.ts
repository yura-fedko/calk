import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { from } from 'rxjs';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';

import { MainComponent } from './main/main.component';
import { MotoComponent } from './moto/moto.component';
import { CarComponent } from './car/car.component';
import { ElectrocarComponent } from './electrocar/electrocar.component';
import { BusComponent } from './bus/bus.component';
import { TruckComponent } from './truck/truck.component';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MotoComponent,
    CarComponent,
    ElectrocarComponent,
    BusComponent,
    TruckComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import {MatTableModule} from '@angular/material';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import {FlightRoutingModule} from './flight-routing.module';



@NgModule({
  declarations: [FlightListComponent, FlightDetailsComponent],
  exports: [
    FlightListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }

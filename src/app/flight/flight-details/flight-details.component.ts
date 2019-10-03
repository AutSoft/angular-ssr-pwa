import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Flight} from '../models/flight.model';

@Component({
  selector: 'nova-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit, OnDestroy {
  flightId: number;
  flight: Flight;
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.data
      .subscribe((data: {flight: Flight}) => this.flight = data.flight);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}

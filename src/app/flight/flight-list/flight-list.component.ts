import {Component, OnInit} from '@angular/core';
import {FlightService} from '../flight.service';
import {Flight} from '../models/flight.model';
import {DbService} from '../../core/db.service';
import {NotificationService} from '../../core/notification.service';

@Component({
  selector: 'nova-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  flights: Flight[];
  displayedColumns = ['flightNumber', 'departureCity', 'arrivalCity'];

  constructor(private flightService: FlightService, private db: DbService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.flightService.listFlights()
      .subscribe(flights => {
        this.flights = flights;

        this.db.addFlights(flights)
          .then(() => {
            console.log('Flights added');
          })
          .finally(async () => {
            console.log(await this.db.getFlights());
            console.log(await this.db.getFlightById(1));
            this.notificationService.showNotification('IndexedDB', 'Flights successfully saved');
          });
      });
  }

}

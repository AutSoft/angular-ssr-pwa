import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {Flight} from '../flight/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db: Dexie;
  private tableName = 'flights';

  constructor() {
    this.db = new Dexie('nova-service');
    this.db.version(1).stores({
      flights: '++id,arrivalCity,departureCity'
    });
  }

  addFlights(flights: Flight[]) {
    return this.db.table(this.tableName).bulkAdd(flights);
  }

  getFlights() {
    return this.db.table(this.tableName).toArray();
  }

  getFlightById(id: number) {
    return this.db.table(this.tableName).get(id);
  }
}

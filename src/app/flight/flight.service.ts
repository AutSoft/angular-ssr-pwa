import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Flight} from './models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) {
  }

  listFlights() {
    return this.http.get<Flight[]>(`${environment.baseUrl}/Flights`);
  }

  getFlightById(id: number) {
    return this.http.get<Flight>(`${environment.baseUrl}/Flights/${id}`);
  }
}

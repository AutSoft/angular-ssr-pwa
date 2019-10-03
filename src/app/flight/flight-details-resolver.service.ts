import {Injectable} from '@angular/core';
import {Flight} from './models/flight.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FlightService} from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsResolverService implements Resolve<Flight> {

  constructor(private flightService: FlightService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> | Promise<Flight> | Flight {
    return this.flightService.getFlightById(route.params.id);
  }
}

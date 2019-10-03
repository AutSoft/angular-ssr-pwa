import {RouterModule, Routes} from '@angular/router';
import {FlightListComponent} from './flight-list/flight-list.component';
import {FlightDetailsComponent} from './flight-details/flight-details.component';
import {FlightDetailsResolverService} from './flight-details-resolver.service';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FlightListComponent
  },
  {
    path: ':id',
    component: FlightDetailsComponent,
    resolve: {
      flight: FlightDetailsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule {
}

'balog.richard@autsoft.hu'

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RouteStateService } from '../services/route-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showTransitionComponent: boolean = true;

  constructor(private routeStateService: RouteStateService) {
    this.routeStateService.showTransitionComponent$.subscribe(show => {
      this.showTransitionComponent = show
    })
  }
}
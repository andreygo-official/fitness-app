import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {

  private showTransitionComponentSubject = new BehaviorSubject<boolean>(true);
  public showTransitionComponent$ = this.showTransitionComponentSubject.asObservable();



  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const navigationEndEvent = event as NavigationEnd
     this.showTransitionComponentSubject.next(navigationEndEvent.url !== '/');
    });
  }



}

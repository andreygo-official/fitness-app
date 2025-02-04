import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from '../../services/route-state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showTransitionComponent: boolean = true;


  constructor(private router: Router,
    private routeStateService: RouteStateService){
    this.routeStateService.showTransitionComponent$.subscribe(show => {
      this.showTransitionComponent = show
  })
}
  img = '../../assets/fitness-logo.png'
  directTo(path: string){
    this.router.navigate([path])
  }
}

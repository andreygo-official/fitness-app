
import { Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-transition-component',
  templateUrl: './transition-component.component.html',
  styleUrls: ['./transition-component.component.css']
})
export class TransitionComponentComponent {
  currentSection?: string = ''
  capitalizedSection: string = ''
  additionalSection: string = ''
  isColored: boolean = true
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe(route => {
      const paths = route.snapshot.url.map(segment => segment.path);
      if (paths.includes('nutrition')) {
        this.currentSection = 'Nutrition';
        if (paths.length > 1 && paths[1].startsWith('meal')) {
          this.currentSection = 'Nutrition';
          this.additionalSection = ' > Recipe';
          this.isColored = false
        } else {
          this.additionalSection = '';
          this.isColored = true
        }
      } else {
        if (paths[0]) {
          this.currentSection = paths[0].charAt(0).toUpperCase() + paths[0].slice(1) || 'Home';
        } else {
          this.currentSection = 'Home';
        }
        this.additionalSection = '';
        this.isColored = true;
      }
      this.capitalizedSection = this.currentSection.charAt(0).toUpperCase() + this.currentSection.slice(1);
    });
  }
}



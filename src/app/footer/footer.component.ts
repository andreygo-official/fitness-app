import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  img = '../../assets/fitness-logo.png'
  constructor(private router: Router){}
  directTo(path: string){
    this.router.navigate([path])
  }
  date = new Date().getFullYear()
}

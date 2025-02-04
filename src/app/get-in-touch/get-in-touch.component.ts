import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css'
})
export class GetInTouchComponent {
  constructor(private router: Router){}
  mapHandler = () => {
    window.open('https://www.google.com/maps/place/Odesa,+Odesa+Oblast,+65000/@46.4600902,30.5469812,11z/data=!3m1!4b1!4m6!3m5!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.482526!4d30.7233095!16zL20vMGZmbXA?entry=ttu', '_blank')
  }
  redirectTo(path: string){
    this.router.navigate([path])
  }
}

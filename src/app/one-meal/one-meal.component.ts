import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../../services/meal.service';
import { Meal } from '../model/Meal';

@Component({
  selector: 'app-one-meal',
  templateUrl: './one-meal.component.html',
  styleUrl: './one-meal.component.css'
})
export class OneMealComponent {
  meal !: Meal
  id!: number;
  constructor(private route: ActivatedRoute,
    private mealService: MealService){}
  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!
    this.mealService.getMeal(this.id).subscribe({
      next: data => this.meal = data,
      error: err => console.error('Error loading meal:', err)
    })
  }
}

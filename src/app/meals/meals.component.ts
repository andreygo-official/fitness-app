import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MealService } from '../../services/meal.service';
import { Meal } from '../model/Meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {
  id !: number
  public selectedId!: number
  @Input() meal: Meal = new Meal(0, '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', [])
  isLast: boolean = false
  constructor(private mealService: MealService){}
    
  directToMeal(meal: Meal){
    this.mealService.showDetails(meal)
  }
}

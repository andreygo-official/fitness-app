import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../model/Meal';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent {

imgCookSrc = 'https://food.unl.edu/newsletters/images/mise-en-plase.jpg'
meals: Meal[] = []

constructor(private mealService: MealService){}

ngOnInit(){
  this.mealService.getMeals().subscribe({
    next: data => {
      this.meals = data
    }
  })
}

}

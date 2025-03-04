import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Meal } from '../app/model/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private getDefaultMeal(): Meal {
    return {
      id: -1,
      imgSrc: '',
      heading: 'Meal Not Found',
      time: '',
      calories: '0',
      people: 0,
      difficulty: 'Unknown',
      intro: '',
      advice: '',
      fat: '0g',
      sugar: '0g',
      salt: '0g',
      protein: '0g',
      carbs: '0g',
      fiber: '0g',
      ingredients: '',
      bullets: []
    };
  }
  url: string = 'https://api.jsonbin.io/v3/b/67c6ce21ad19ca34f81647d3'
  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }
  getMeals(): Observable<Meal[]>{
    return this.http.get<{ record: { meals: Meal[] } }>(this.url).pipe(
      map(response => response.record.meals)
    )
  }
  getMeal(id: number): Observable<Meal> {
    return this.http.get<{ record: { meals: Meal[] } }>(this.url).pipe(
      map(response => {
        const meal = response.record.meals.find(meal => meal.id === id);
        return meal ? meal : this.getDefaultMeal()
      }),
      catchError(error => {
        console.error('Error fetching meal:', error);
        return of(this.getDefaultMeal()); // Return default meal on API error
      })
    );
  }
  showDetails(meal: Meal): void {
    this.router.navigate(['nutrition/meal', meal.id], { relativeTo: this.route });
  }
}

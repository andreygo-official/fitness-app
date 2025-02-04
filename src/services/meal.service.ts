import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Meal } from '../app/model/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  url: string = 'http://localhost:3000/meals'
  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }
  getMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>(this.url)
  }
  getMeal(id: number): Observable<Meal>{
    return this.http.get(`${this.url}/${id}`) as Observable<Meal>
  }
  showDetails(meal: Meal): void {
    this.router.navigate(['nutrition/meal', meal.id], { relativeTo: this.route });
  }
}

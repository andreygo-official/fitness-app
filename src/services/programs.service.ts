import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../app/model/Program';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  url: string = 'http://localhost:3001/programs'
  constructor(private http: HttpClient) { }
  getPrograms(): Observable<Program[]>{
    return this.http.get(this.url) as Observable<Program[]>
  }
}

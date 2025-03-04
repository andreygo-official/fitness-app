import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Program } from '../app/model/Program';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  url: string = 'https://api.jsonbin.io/v3/b/67c6d583e41b4d34e4a08fb6'
  constructor(private http: HttpClient) { }
  getPrograms(): Observable<Program[]>{
    return this.http.get<{record: {programs: Program[]}}>(this.url).pipe(
      map(response => response.record.programs)
  )}
}

import { Component } from '@angular/core';
import { ProgramsService } from '../../services/programs.service';
import { Program } from '../model/Program';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  programs: Program[] = []
  constructor(private programService: ProgramsService){}
  ngOnInit(){
    this.programService.getPrograms().subscribe({
      next: data => {
        this.programs = data.map(program => ({
          ...program,
          list: Object.values(program.list)
        }));
      }
    });
  }
}

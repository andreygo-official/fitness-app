import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramsService } from '../../services/programs.service';
import { Program } from '../model/Program';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Meal } from '../model/Meal';
import { MealService } from '../../services/meal.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  currentImgSrc!: string
  currentImageIndex!: number
  imageSources!: string[]
  imgSrc = 'assets/about-me.jpg'
  collageOneSrc = 'assets/collage-one.png'
  collageTwoSrc = 'assets/collage-two.jpg'
  collageThreeSrc = 'assets/collage-three.jpg'
  collageFourSrc = 'assets/collage-four.jpg'
  fitnessManSrc = 'assets/fitness-man.png'
  blogSrc = 'assets/blog.png'
  fitnessCouple = 'assets/fitness-couple.png'
  cookingImg = 'assets/cooking-process.jpg'
  constructor(
    private router: Router, 
    private programService: ProgramsService,
    private modalService: NgbModal,
    private mealService: MealService
    ){
    this.imageSources = [this.collageOneSrc, this.collageTwoSrc, this.collageThreeSrc, this.collageFourSrc];
  }
directTo(path: string){
this.router.navigate([path])
}
programs: Program[] = []
meals: Meal[] = []
  ngOnInit(){
    this.programService.getPrograms().subscribe({
      next: data => {
        this.programs = data
      }
    })
    this.mealService.getMeals().subscribe({
      next: data => {
        this.meals = data
      }
    })
  }
openModal(imgSrc: string, imageModal: TemplateRef<any>): void{
  this.currentImgSrc = imgSrc;
  this.currentImageIndex = this.imageSources.indexOf(imgSrc);
  this.modalService.open(imageModal, { ariaLabelledBy: 'modal-basic-title' })

}
changeImg(direction: number): void{
this.currentImageIndex = (this.imageSources.length + this.currentImageIndex + direction) % this.imageSources.length
this.currentImgSrc = this.imageSources[this.currentImageIndex]
}

goToStories() {
  this.router.navigate(['/about'], { fragment: 'testimonials' })
}

toMeal(meal: Meal){
  this.mealService.showDetails(meal)
}
  
}

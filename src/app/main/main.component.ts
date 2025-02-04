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
  imgSrc = 'https://hips.hearstapps.com/hmg-prod/images/mh-bodybuild-royalty-free-image-1576882445.jpg'
  collageOneSrc = 'https://images.unsplash.com/photo-1603503363848-6952525df449?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D'
  collageTwoSrc = 'https://st2.depositphotos.com/2972641/6060/i/450/depositphotos_60600635-stock-photo-closeup-of-a-muscular-young.jpg'
  collageThreeSrc = 'https://hips.hearstapps.com/hmg-prod/images/mental-fitness-sessions-1674144770.jpg'
  collageFourSrc = 'https://burst.shopifycdn.com/photos/core-strength-fitness.jpg?width=1000&format=pjpg&exif=0&iptc=0'
  fitnessManSrc = 'https://pngfreepic.com/wp-content/uploads/2021/06/fitness-45.png?v=1663318043'
  blogSrc = 'https://hips.hearstapps.com/hmg-prod/images/muscular-shirtless-man-exercising-with-dumbbells-royalty-free-image-1711991944.jpg?crop=0.668xw:1.00xh;0.296xw,0&resize=1200:*'
  bacgroundImg = 'https://www.mixedinamerica.org/wp-content/uploads/2018/08/image-background-color-5.jpg'
  fitnessCouple = 'https://pngimg.com/d/fitness_PNG196.png'
  cookingImg = 'https://t4.ftcdn.net/jpg/02/54/93/61/360_F_254936166_5MFxlGv7PNPw4VmpuNNQxlU0K2D4f7Ya.jpg'
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

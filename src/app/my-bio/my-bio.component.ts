import { Component } from '@angular/core';

@Component({
  selector: 'app-my-bio',
  templateUrl: './my-bio.component.html',
  styleUrl: './my-bio.component.css'
})
export class MyBioComponent {
imgSrc = 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg'
myAge = new Date().getFullYear() - 2002
imgFitnessSrc = 'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg'
imgClientOneSrc ='https://st3.depositphotos.com/1001959/12896/i/450/depositphotos_128967474-Muscular-male-fitness-model.jpg'
clientImgTwoSrc = 'https://i0.wp.com/www.pictureperfectphoto.co.uk/wp-content/uploads/2021/01/102-J697-scaled.jpg?fit=1080%2C720&ssl=1'
clientImgThreeSrc = 'https://fitnessvolt.com/wp-content/uploads/2020/05/steve-cook-2.jpg'
}

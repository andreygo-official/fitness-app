import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main/main.component';
import { MyBioComponent } from './my-bio/my-bio.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { OneMealComponent } from './one-meal/one-meal.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'about', component: MyBioComponent
  },
  {
    path: 'programs', component: ProgramsComponent
  },
  {
    path: 'nutrition', component: NutritionComponent
  },
  {
    path: 'nutrition/meal/:id', component: OneMealComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

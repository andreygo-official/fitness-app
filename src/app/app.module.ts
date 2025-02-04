import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MyBioComponent } from './my-bio/my-bio.component';
import { ProgramsComponent } from './programs/programs.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { TransitionComponentComponent } from './transition-component/transition-component.component';
import { MealsComponent } from './meals/meals.component';
import { HttpClientModule } from '@angular/common/http';
import { OneMealComponent } from './one-meal/one-meal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MyBioComponent,
    ProgramsComponent,
    NutritionComponent,
    ContactsComponent,
    GetInTouchComponent,
    TransitionComponentComponent,
    MealsComponent,
    OneMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

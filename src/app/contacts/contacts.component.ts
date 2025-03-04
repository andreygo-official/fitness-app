import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  options = ['Please Choose...', 'Gaining muscle mass', 'Post-pregnancy', 'Post-bullking cutting stage']
  registrationForm!: FormGroup
  accordions = [
    {
      id: 'collapseOne',
      header: 'Do you have fitness programs for men?',
      body: `Sure, I've trained many men and can create individual nutrition and training plans
            taking features of the male body into account.`,
      expanded: false
    },
    {
      id: 'collapseTwo',
      header: 'When will I see the results?',
      body: `It all depends on you only. If you train properly and stick to the meal plan, you'll see
             the first results in 1-2 months.`,
      expanded: false
    },
    {
      id: 'collapseThree',
      header: 'Why can’t I lose weight though I train a lot?',
      body: `I can find an answer to this question during a personal consultation as there are dozens
            of factors. One of the most important factors is nutrition and stress.`,
      expanded: false
    },
    {
      id: 'collapseFour',
      header: 'Do you offer one-on-one training?',
      body: `Yes, I offer both group and private sessions, online and offline in New York.`,
      expanded: false
    },
    {
      id: 'collapseFive',
      header: 'What does a nutrition plan include?',
      body: `It includes general recommendations based on your individual preferences, allergies, and
            health condition. Also, the nutrition plan contains many recipes and menu examples for a week.`,
      expanded: false
    }
  ]
  get userName(){
    return this.registrationForm.get('username')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get program(){
    return this.registrationForm.get('program')
  }
  constructor(
    private fb: FormBuilder
  ){}
  ngOnInit(){
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      program: ['', [Validators.required]],
      'fitness-area': ['']

    })
  }
  onSubmit(){
    if(this.registrationForm.valid && this.program?.value !== this.options[0]){
      console.log('Form Submitted!', this.registrationForm.value);
      
    }
  }
  toggleAccordeon(accordion: any){
    accordion.expanded = !accordion.expanded
  }
}

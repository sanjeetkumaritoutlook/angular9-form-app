import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { QuestionService } from './services/question.service';
import { QuestionBase } from './models/question-base';
import { Observable } from 'rxjs';


import { NgFormBuilder } from './template-parser/ng-form-builder';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  providers:  [QuestionService],
  styleUrls: ['./app.component.css']
})

//Setting Default value as string
//firstname= new FormControl(‘Sachin’);
 
//Setting Default value & disabled state as object
//firstname: new FormControl({value: ‘Rahul’, disabled: true}),
//https://www.tektutorialshub.com/angular/angular-reactive-forms/


export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  jsonData = `{    
    "firstName": "Sanjeet",
    "lastName": "Kumar",
    "password": "secret",
    "age": 30
}`;

formBuilder = new NgFormBuilder();
resultHtml: SafeHtml;
textHtml = '';
textTs = '';
showOutput = false;

  constructor(service: QuestionService, private sanitizer: DomSanitizer) {
    this.questions$ = service.getQuestions();
  }

  onSubmit(formValues: JSON) {
    let result = this.formBuilder.getTemplateForm(this.jsonData);
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);

    this.textHtml = result;
    this.textTs = this.formBuilder.getTsCode();
    this.showOutput = true;
    // console.log(`${result}`);
  }

  reset(form: NgForm) {
    form.reset();
    this.resultHtml = '';
    this.textHtml = '';
    this.textTs = '';
    this.showOutput = false;    
  } 
  // title = 'mdf';
  // contactForm = new FormGroup({})
  contactForm = new FormGroup({
    //firstname: new FormControl(),
    firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()

    // address:new FormGroup({
    //   city: new FormControl(),
    //   street: new FormControl(),
    //   pincode:new FormControl()
    // })

  })
  onSubmitt() {
    console.log(this.contactForm.value);
  }
   
}

import { Component,ViewChild , OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import {MaterialModule} from '../feature-material.module';
//https://github.com/SinghDigamber/angular8-reactive-forms
// https://stackoverflow.com/questions/58594311/angular-material-index-d-ts-is-not-a-module
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  @ViewChild('chipList', { static: true }) chipList;
  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // constructor() { }
  constructor(public fb: FormBuilder) {}
 /* Reactive form */

//  reactiveForm() {
//   this.myForm = this.fb.group({
//     name: [''],
//     email: [''],
//     gender: ['Male'],
//     dob: [''],      
//     grade: [''],
//     subjects: [this.SubjectsArray]
//   })
// }

reactiveForm() {
  this.myForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    gender: ['Male'],
    dob: ['', [Validators.required]],
    grade: [''],
    subjects: [this.SubjectsArray]
  })
}

  /* Date */
  date(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }
   /* Add dynamic languages */
   add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.SubjectsArray.length < 5) {
      this.SubjectsArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
   /* Remove dynamic languages */
   remove(subject: Subject): void {
    const index = this.SubjectsArray.indexOf(subject);
    if (index >= 0) {
      this.SubjectsArray.splice(index, 1);
    }
  }  

   /* Handle form errors in Angular 8 */
   public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

 
  submitForm() {
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
    this.reactiveForm()
  }

}

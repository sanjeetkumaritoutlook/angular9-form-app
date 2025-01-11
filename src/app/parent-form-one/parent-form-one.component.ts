import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-parent-form-one',
  templateUrl: './parent-form-one.component.html',
  styleUrls: ['./parent-form-one.component.css']
})
export class ParentFormOneComponent implements OnInit {
  
  form = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

//import { NgSelectModule, NgOption } from '@ng-select/ng-select';
//https://stackoverflow.com/questions/49722349/how-to-make-cascading-dropdown-in-a-angular-reactive-formarray-work-without-mess

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.css']
})
export class CascadingDropdownComponent implements OnInit {
  readonly selectValues = [{type: 'location', values: ['Morroco', 'France', 'Belgium']}, {type: 'device', values: ['phone', 'tablet']}];

  selects: string[];


  public profileForm: FormGroup;


  public saveProfileForm() {

    console.log(this.profileForm.value);
  }
  // constructor() { }
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({

      firstNameInput: [""],
      lastNameInput: [""],
      optionGroups: this.fb.array([
        this.fb.group({
          selectInput: [""],
          whereInput: [""],
        }),
        this.fb.group({
          selectInput: [""],
          whereInput: [""],
        })
      ]),
    });

    this.selects = [];
  }
  ngOnInit(): void {
  }
  getCriteria(type){
    const select = this.selectValues.find(_ => _.type == type);
    return select ? select.values : select;
  }
}

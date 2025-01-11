import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
//Associate the FormGroup model and view
//form group defines a form with a fixed set of controls that you can manage together.
//Nested Forms
// profileForm = new FormGroup({    //Form group Object  pristine touched dirty
//   firstName: new FormControl(''), // collected within a group. 
//   lastName: new FormControl(''),

//   //created Nested FG- form Groups
//   address: new FormGroup({
//     street: new FormControl(''),
//     city: new FormControl(''),
//     state: new FormControl(''),
//     zip: new FormControl('')
//   })

// });
  // constructor() { }
//Inject the FormBuilder service
//An injectable service
//control(), group(), and array()-factory methods
constructor(private fb: FormBuilder) { }


profileForm = this.fb.group({
  //firstName: [''],
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),

  //creating dynamic Forms- FormArray
  //The form array instance represents an undefined number of controls in an array. 
  aliases: this.fb.array([
    this.fb.control('')
  ])
});
  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  //setValue() patchvalue()
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }


  get aliases() {
    return this.profileForm.get('aliases') as FormArray; //provide an explicit type to access  here Formarray
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}

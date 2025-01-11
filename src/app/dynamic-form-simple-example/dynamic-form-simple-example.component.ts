import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import * as formDescriptor from './form-descriptor';
import { Subscription } from 'rxjs';

/*https://stackblitz.com/edit/dynamic-form-simple-example? */
@Component({
  selector: 'app-dynamic-form-simple-example',
  templateUrl: './dynamic-form-simple-example.component.html',
  styleUrls: ['./dynamic-form-simple-example.component.css']
})
export class DynamicFormSimpleExampleComponent implements OnInit, OnDestroy {

  public descriptor = formDescriptor.nameDescription;
  public simpleFormGroup: FormGroup;
  public formSubscription$: Subscription;
  public result: string;
  public resultVM;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.simpleFormGroup = this.createForm(this.descriptor);
     this.formSubscription$ = this.onFormChange();
  }

  onFormChange() {
    return this.simpleFormGroup.valueChanges
    .subscribe(val => {
      this.result = JSON.stringify(val);
    })
  }

// better to store on a service for future reuse 
  createForm(descriptor): FormGroup {
    const _simpleFormGroup: FormGroup | any = {};
    for (const _control of Object.keys(descriptor)) {
      let control: FormControl;
      if ( this.descriptor[_control].value ) {
        if (this.descriptor[_control].Validators) {
          control = this.formBuilder.control(this.descriptor[_control].value, {
                    validators: this.descriptor[_control].Validators,
                });
        } else {
          control = this.formBuilder.control(this.descriptor[_control].value);
        }
      } 
      _simpleFormGroup[_control] = control;
    }
    return this.formBuilder.group(_simpleFormGroup);
  }

  onSubmit() {
    this.resultVM = this.result;
  }

  ngOnDestroy() {
    this.formSubscription$ && this.formSubscription$.unsubscribe();
  }

}
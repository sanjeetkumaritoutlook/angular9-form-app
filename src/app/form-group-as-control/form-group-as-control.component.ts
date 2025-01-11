import { Component, OnInit, forwardRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-group-as-control',
  templateUrl: './form-group-as-control.component.html',
  styleUrls: ['./form-group-as-control.component.css'],
  	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormGroupAsControlComponent),
			multi: true,
		}]
})
export class FormGroupAsControlComponent implements OnInit, ControlValueAccessor, OnDestroy {

  public formChanged = new EventEmitter<any>();
  public modelYear: FormGroup;
  public formSubscription$: Subscription;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.modelYear = this.createForm();
    this.formSubscription$ = this.onFormChange()    .subscribe(val => {
      			this.formChanged.emit(val);
    });
  }

  createForm(): FormGroup {
      const modelYear: FormGroup | any = {};
      modelYear['model'] = this.formBuilder.control('model');
      modelYear['year'] = this.formBuilder.control('year');
      return this.formBuilder.group(modelYear);
  }

  onFormChange() {
    return this.modelYear.valueChanges;
  }

  registerOnChange(fn: any): void {
    this.formChanged.subscribe(fn);
  }

  writeValue(controls): void {
    console.log(controls);
  }

  setDisabledState(isDisabled: boolean): void {}

	registerOnTouched(fn: any): void {}
  onSubmit() {
    console.log(this.modelYear.value);
  }
  ngOnDestroy() {
    this.formSubscription$ && this.formSubscription$.unsubscribe();
  }

}
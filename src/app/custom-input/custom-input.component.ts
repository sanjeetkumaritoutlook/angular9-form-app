import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { FormControl,FormControlDirective,NG_VALUE_ACCESSOR,ControlContainer } from "@angular/forms";
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit {
  @Input() formControl: FormControl;
      @Input() formControlName: string;
    
      @ViewChild(FormControlDirective, {static: true})
      formControlDirective: FormControlDirective;
      private value: string;
      private disabled: boolean;
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }


  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }
}



import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupAsControlComponent } from './form-group-as-control.component';

describe('FormGroupAsControlComponent', () => {
  let component: FormGroupAsControlComponent;
  let fixture: ComponentFixture<FormGroupAsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupAsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupAsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

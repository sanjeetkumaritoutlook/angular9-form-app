import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSimpleExampleComponent } from './dynamic-form-simple-example.component';

describe('DynamicFormSimpleExampleComponent', () => {
  let component: DynamicFormSimpleExampleComponent;
  let fixture: ComponentFixture<DynamicFormSimpleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSimpleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSimpleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

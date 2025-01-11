import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRedererComponent } from './form-rederer.component';

describe('FormRedererComponent', () => {
  let component: FormRedererComponent;
  let fixture: ComponentFixture<FormRedererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRedererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRedererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

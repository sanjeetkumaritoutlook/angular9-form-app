import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInputChildComponent } from './radio-input-child.component';

describe('RadioInputChildComponent', () => {
  let component: RadioInputChildComponent;
  let fixture: ComponentFixture<RadioInputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioInputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

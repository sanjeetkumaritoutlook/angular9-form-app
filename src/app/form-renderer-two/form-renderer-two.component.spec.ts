import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRendererTwoComponent } from './form-renderer-two.component';

describe('FormRendererTwoComponent', () => {
  let component: FormRendererTwoComponent;
  let fixture: ComponentFixture<FormRendererTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRendererTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRendererTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

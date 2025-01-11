import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatautoComponent } from './matauto.component';

describe('MatautoComponent', () => {
  let component: MatautoComponent;
  let fixture: ComponentFixture<MatautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

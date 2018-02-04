import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypertensionComponent } from './hypertension.component';

describe('HypertensionComponent', () => {
  let component: HypertensionComponent;
  let fixture: ComponentFixture<HypertensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypertensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypertensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

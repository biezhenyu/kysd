import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthconsultComponent } from './healthconsult.component';

describe('HealthconsultComponent', () => {
  let component: HealthconsultComponent;
  let fixture: ComponentFixture<HealthconsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthconsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

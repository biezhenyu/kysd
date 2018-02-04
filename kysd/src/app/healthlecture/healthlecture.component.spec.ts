import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthlectureComponent } from './healthlecture.component';

describe('HealthlectureComponent', () => {
  let component: HealthlectureComponent;
  let fixture: ComponentFixture<HealthlectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthlectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthlectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

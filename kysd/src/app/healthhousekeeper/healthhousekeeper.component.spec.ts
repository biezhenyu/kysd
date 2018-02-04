import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthhousekeeperComponent } from './healthhousekeeper.component';

describe('HealthhousekeeperComponent', () => {
  let component: HealthhousekeeperComponent;
  let fixture: ComponentFixture<HealthhousekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthhousekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthhousekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

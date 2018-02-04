import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthygasstationComponent } from './healthygasstation.component';

describe('HealthygasstationComponent', () => {
  let component: HealthygasstationComponent;
  let fixture: ComponentFixture<HealthygasstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthygasstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthygasstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

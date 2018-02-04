import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersessionComponent } from './supersession.component';

describe('SupersessionComponent', () => {
  let component: SupersessionComponent;
  let fixture: ComponentFixture<SupersessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

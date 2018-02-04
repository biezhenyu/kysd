import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSuccessComponent } from './consult-success.component';

describe('ConsultSuccessComponent', () => {
  let component: ConsultSuccessComponent;
  let fixture: ComponentFixture<ConsultSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

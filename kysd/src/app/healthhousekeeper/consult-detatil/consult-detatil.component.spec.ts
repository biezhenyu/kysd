import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDetatilComponent } from './consult-detatil.component';

describe('ConsultDetatilComponent', () => {
  let component: ConsultDetatilComponent;
  let fixture: ComponentFixture<ConsultDetatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultDetatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultDetatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

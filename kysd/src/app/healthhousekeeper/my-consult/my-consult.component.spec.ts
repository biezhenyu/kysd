import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConsultComponent } from './my-consult.component';

describe('MyConsultComponent', () => {
  let component: MyConsultComponent;
  let fixture: ComponentFixture<MyConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoncenterComponent } from './personcenter.component';

describe('PersoncenterComponent', () => {
  let component: PersoncenterComponent;
  let fixture: ComponentFixture<PersoncenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoncenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoncenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

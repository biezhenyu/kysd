import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromitComponent } from './promit.component';

describe('PromitComponent', () => {
  let component: PromitComponent;
  let fixture: ComponentFixture<PromitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

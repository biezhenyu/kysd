import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperglycemiaComponent } from './hyperglycemia.component';

describe('HyperglycemiaComponent', () => {
  let component: HyperglycemiaComponent;
  let fixture: ComponentFixture<HyperglycemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperglycemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperglycemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

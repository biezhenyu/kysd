import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperlipemiaComponent } from './hyperlipemia.component';

describe('HyperlipemiaComponent', () => {
  let component: HyperlipemiaComponent;
  let fixture: ComponentFixture<HyperlipemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperlipemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperlipemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

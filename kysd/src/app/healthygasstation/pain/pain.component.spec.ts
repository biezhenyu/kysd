import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainComponent } from './pain.component';

describe('PainComponent', () => {
  let component: PainComponent;
  let fixture: ComponentFixture<PainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

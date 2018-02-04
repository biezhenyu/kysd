import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkindiseaseComponent } from './skindisease.component';

describe('SkindiseaseComponent', () => {
  let component: SkindiseaseComponent;
  let fixture: ComponentFixture<SkindiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkindiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkindiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

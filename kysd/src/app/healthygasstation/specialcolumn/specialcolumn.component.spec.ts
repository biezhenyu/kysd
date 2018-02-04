import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialcolumnComponent } from './specialcolumn.component';

describe('SpecialcolumnComponent', () => {
  let component: SpecialcolumnComponent;
  let fixture: ComponentFixture<SpecialcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

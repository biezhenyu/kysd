import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstricttionComponent } from './astricttion.component';

describe('AstricttionComponent', () => {
  let component: AstricttionComponent;
  let fixture: ComponentFixture<AstricttionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstricttionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstricttionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

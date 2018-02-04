import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartbingComponent } from './heartbing.component';

describe('HeartbingComponent', () => {
  let component: HeartbingComponent;
  let fixture: ComponentFixture<HeartbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

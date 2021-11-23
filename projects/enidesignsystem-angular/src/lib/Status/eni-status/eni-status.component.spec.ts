import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniStatusComponent } from './eni-status.component';

describe('EniStatusComponent', () => {
  let component: EniStatusComponent;
  let fixture: ComponentFixture<EniStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
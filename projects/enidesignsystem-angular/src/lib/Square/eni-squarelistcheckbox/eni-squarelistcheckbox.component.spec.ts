import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSquarelistcheckboxComponent } from './eni-squarelistcheckbox.component';

describe('EniSquarelistcheckboxComponent', () => {
  let component: EniSquarelistcheckboxComponent;
  let fixture: ComponentFixture<EniSquarelistcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSquarelistcheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSquarelistcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

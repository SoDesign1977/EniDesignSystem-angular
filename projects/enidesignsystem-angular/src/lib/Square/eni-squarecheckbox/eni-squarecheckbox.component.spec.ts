import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSquarecheckboxComponent } from './eni-squarecheckbox.component';

describe('EniSquarecheckboxComponent', () => {
  let component: EniSquarecheckboxComponent;
  let fixture: ComponentFixture<EniSquarecheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSquarecheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSquarecheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

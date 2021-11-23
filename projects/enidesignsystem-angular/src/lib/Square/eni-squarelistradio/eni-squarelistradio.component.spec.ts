import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSquarelistradioComponent } from './eni-squarelistradio.component';

describe('EniSquarelistradioComponent', () => {
  let component: EniSquarelistradioComponent;
  let fixture: ComponentFixture<EniSquarelistradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSquarelistradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSquarelistradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

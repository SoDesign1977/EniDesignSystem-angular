import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniRadioButtonComponent } from './eni-radio-button.component';

describe('EniRadioButtonComponent', () => {
  let component: EniRadioButtonComponent;
  let fixture: ComponentFixture<EniRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

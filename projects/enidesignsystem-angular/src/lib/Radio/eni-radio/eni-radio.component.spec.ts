import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniRadioComponent } from './eni-radio.component';

describe('EniRadioComponent', () => {
  let component: EniRadioComponent;
  let fixture: ComponentFixture<EniRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

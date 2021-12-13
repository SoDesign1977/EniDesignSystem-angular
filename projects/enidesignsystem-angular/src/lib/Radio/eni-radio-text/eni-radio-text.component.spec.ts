import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniRadioTextComponent } from './eni-radio-text.component';

describe('EniRadioComponent', () => {
  let component: EniRadioTextComponent;
  let fixture: ComponentFixture<EniRadioTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniRadioTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniRadioTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

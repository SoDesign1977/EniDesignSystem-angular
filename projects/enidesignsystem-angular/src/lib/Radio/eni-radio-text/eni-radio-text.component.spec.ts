import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EniRadioTextComponent } from './eni-radio-text.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniRadioComponent', () => {
  let component: EniRadioTextComponent;
  let fixture: ComponentFixture<EniRadioTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniRadioTextComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
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
